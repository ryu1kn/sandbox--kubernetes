FROM node:12.8-alpine

WORKDIR /app/

COPY package.json ./

RUN npm install --production

COPY app.js ./

CMD [ "node", "app" ]
