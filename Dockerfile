# Step 1: Use the official Node.js image from Docker Hub
FROM node:20

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Copy the .env file to the container (optional)
COPY .env .env

# Step 6: Expose the port your app runs on (replace 3000 with your app's port)
EXPOSE 3000

# Step 7: Define the command to run your app
CMD ["npm", "start"]
