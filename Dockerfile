# Stage 1: Build the Next.js app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Create a minimal runtime container
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built files and dependencies from the build stage
COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/package.json package.json

# Expose the port the Next.js app runs on
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm run start"]