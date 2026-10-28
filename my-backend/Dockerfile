# Use lightweight Node.js base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies (including any required modules)
COPY package*.json ./
RUN npm install

# Copy server code
COPY server.js .

# Expose backend port
EXPOSE 3002

# Command to start backend
CMD ["node", "server.js"]

