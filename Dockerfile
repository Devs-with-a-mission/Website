FROM node:16.15.0

WORKDIR /usr/src/app

COPY . .
RUN npm install -g npm@8.19.1
RUN npm install 
EXPOSE 8080
EXPOSE 443
EXPOSE 3000

ENTRYPOINT ["npm","start"]

