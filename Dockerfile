FROM node:16.0.0


WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD yarn run dev