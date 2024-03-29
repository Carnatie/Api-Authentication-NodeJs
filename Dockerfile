FROM node:16.16.0

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8888

CMD [ "npm", "start" ]