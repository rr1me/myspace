FROM node:22.3.0-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build
EXPOSE 3010
CMD ["yarn", "run", "start"]