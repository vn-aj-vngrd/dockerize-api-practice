# Specify the base image to 18-alpine
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port used by the application
EXPOSE 4000

# Start the application
CMD ["node", "app.js"]