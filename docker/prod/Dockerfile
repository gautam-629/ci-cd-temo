# Use the Node.js 18 Alpine image as the base image for the build stage.
# This lightweight image is ideal for building Node.js applications.
FROM node:18-alpine as builder

# Set the working directory inside the container.
WORKDIR /app

# Copy the package.json and package-lock.json files to the container.
# This ensures dependencies are installed based on the lock file for consistency.
COPY package*.json ./

# Install dependencies using npm, leveraging the clean-install process (faster and consistent).
RUN npm ci

# Copy the entire project directory to the working directory in the container.
COPY . .

# Build the application (e.g., transpile TypeScript, bundle code, etc.).
RUN npm run build


# Use a separate Node.js 18 Alpine image for the production stage.
# This keeps the final image smaller by excluding development dependencies.
FROM node:18-alpine as production

# Set the Node.js environment to production for optimized performance.
ENV NODE_ENV=production

# Set the working directory for the production container.
WORKDIR /app

# Copy the package.json and package-lock.json to the production container.
# This ensures production dependencies are installed correctly.
COPY package*.json ./

# Install only production dependencies, ignoring scripts for security and speed.
RUN npm ci --ignore-scripts

# Copy the build output from the builder stage to the production container.
COPY --from=builder /app/dist ./

# Expose port 5500 to allow access to the application.
EXPOSE 5500

# Define the command to start the application.
# Ensure it points to the built server file in the dist folder.
CMD ["node", "src/server.js"]
