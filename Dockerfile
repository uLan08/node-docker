FROM node:6.11
RUN npm install -g yarn
WORKDIR /app
COPY . .
RUN yarn install && yarn build
EXPOSE 8080
CMD node dist/index.js 