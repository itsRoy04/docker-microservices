FROM node:18.13.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY /src ./src/

CMD [ "node", "src/server.js" ]

