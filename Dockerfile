FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install 

#RUN npm run build
#5000 1337
EXPOSE 5000

#CMD [ "node", "build/server.js"]
CMD [ "yarn", "dev"]