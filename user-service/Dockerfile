FROM node:18.13.0

WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Specify the command to run your application
CMD ["node", "src/server.js"]
