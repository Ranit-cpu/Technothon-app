# Step 1: Build the React app
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy source files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Build the app for production
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]