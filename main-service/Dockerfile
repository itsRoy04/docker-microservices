FROM node:18.13.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY /src ./src/
RUN npm install -g nodemon
CMD npm run dev
# CMD [ "nodemon", "src/server.js" ]

