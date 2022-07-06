FROM node:17.4.0

WORKDIR usr/src/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .


EXPOSE 3000

CMD [ "npm", "start" ]