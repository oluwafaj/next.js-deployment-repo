# Base image
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies manifest
COPY package*.json ./
RUN npm install

# Copy application source files
COPY . .

# Build Next.js app for production
RUN npm run build

# Production runner image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]