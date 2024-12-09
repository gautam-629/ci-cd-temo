import request from 'supertest';
import app from '../../src/app';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../../src/config/data-source';
import { User } from '../../src/entity/User'; // Make sure to import the User entity

describe('POST /user', () => {
  let connection: DataSource;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();
  });

  beforeEach(async () => {
    await connection.dropDatabase();
    await connection.synchronize();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should create a user and return 201 and persist in database', async () => {
    const userData = {
      username: 'TestUser',
      email: 'testuser@example.com',
      password: 'TestPassword123',
    };

    // Send request to create user
    const response = await request(app as any)
      .post('/user')
      .send(userData);

    // Check API response
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('User created successfully');
    expect(response.body.user.email).toBe(userData.email);

    // Verify user persistence in database
    const userRepository = connection.getRepository(User);
    const savedUser = await userRepository.findOne({
      where: { email: userData.email },
    });

    // Assert that user exists in database
    expect(savedUser).toBeTruthy();
    expect(savedUser?.username).toBe(userData.username);
    expect(savedUser?.email).toBe(userData.email);
  });

  it('should prevent creating a user with duplicate email', async () => {
    const userData = {
      username: 'TestUser',
      email: 'testuser@example.com',
      password: 'TestPassword123',
    };

    // First attempt to create user
    const firstResponse = await request(app as any)
      .post('/user')
      .send(userData);
    expect(firstResponse.statusCode).toBe(201);

    // Second attempt with same email
    const secondResponse = await request(app)
      .post('/user')
      .send({
        ...userData,
        username: 'AnotherTestUser',
      });

    // Check that second attempt is rejected
    expect(secondResponse.statusCode).toBe(409);

    // Verify only one user exists in database
    const userRepository = connection.getRepository(User);
    const users = await userRepository.find();
    expect(users.length).toBe(1);
  });
});
