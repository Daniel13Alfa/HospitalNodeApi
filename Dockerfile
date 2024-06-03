FROM node:16
#FROM node:16-alpine 17
#working dir
WORKDIR /usr/src/app
COPY package*.json ./
#CMD [ "npm","start"]
RUN npm install 

COPY . .

RUN npm run build
#5000 1337
EXPOSE 5000

CMD [ "node", "build/server.js"]