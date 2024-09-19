# Stage 1: Build the Next.js app
FROM node:18 AS build

# Set env variable
ARG NEXT_PUBLIC_FLORIST_API_URL

# Set the working directory inside the container
WORKDIR /src

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js app
RUN NEXT_PUBLIC_FLORIST_API_URL=$NEXT_PUBLIC_FLORIST_API_URL npm run build

# Stage 2: Create a minimal runtime container
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /src

# Copy the built files and dependencies from the build stage
COPY --from=build /src/.next /src/.next
COPY --from=build /src/public /src/public
COPY --from=build /src/node_modules /src/node_modules
COPY --from=build /src/package.json /src/package.json
COPY --from=build /src/next.config.mjs /src/next.config.mjs

# Expose the port the Next.js app runs on
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "start"]