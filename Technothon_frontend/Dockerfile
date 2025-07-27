FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Expose Vite Dev Server's default port
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev"]