FROM node:16.15.0

WORKDIR /usr/src/app

COPY . .
RUN npm i

EXPOSE 3000

ENTRYPOINT ["npm","start"]

