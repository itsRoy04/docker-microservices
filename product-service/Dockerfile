FROM node:18.13.0
WORKDIR /usr/src
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY . .
# RUN npm install -g nodemon
CMD npm run start 
# CMD [ "nodemon", "src/server.js" ]

