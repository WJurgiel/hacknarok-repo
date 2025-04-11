FROM node:alpine
WORKDIR /client
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
EXPOSE 3000
CMD ["npm", "run", "build"]
CMD ["serve", "-s", "dist" ]
