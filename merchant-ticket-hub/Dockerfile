FROM node:latest

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . .

EXPOSE 8150

CMD ["sh", "-c", "npm run build && npm run preview"]