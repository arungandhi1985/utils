# Dockerfile
FROM node:16

WORKDIR /utils

COPY package*.json ./

RUN npm install

RUN npm run build

EXPOSE 8082

CMD ["npm", "start"]