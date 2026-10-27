# Use Node.js base image
FROM node:20-alpine AS builder

WORKDIR /app

# 1. Declare the build argument
ARG NEXT_PUBLIC_API_URL
# 2. Expose it as an environment variable so Next.js can see it during build
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the app code
COPY . .

# Build the Next.js app (it will now correctly bake in your live Azure URL)
RUN npm run build

# Production image runtime stage...
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
