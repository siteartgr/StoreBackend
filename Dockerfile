# Use an official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port your app will run on (if applicable)
# EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "start"]
