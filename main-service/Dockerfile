# FROM node:18.13.0
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev

# COPY /src ./src/
# # RUN npm install -g nodemon
# CMD npm run start 
# # CMD [ "nodemon", "src/server.js" ]




FROM node:18.13.0

WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Use a temporary image for installing dependencies to take advantage of Docker cache
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copy the rest of the application code
COPY ./src ./src/

# Uncomment the line below if you want to install nodemon globally
# RUN npm install -g nodemon

# Start the application
CMD ["npm", "run", "start"]
# Alternatively, if you have nodemon installed globally, you can use the following CMD:
# CMD ["nodemon", "src/server.js"]
