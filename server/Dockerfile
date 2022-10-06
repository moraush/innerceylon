FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT=5000
ENV CONNECTION_URL='mongodb+srv://innerceylon:Rr2475597@clusterinnerceylon.bstfb.mongodb.net/innerceylon?retryWrites=true&w=majority'

EXPOSE 5000

CMD ["npm", "start"]