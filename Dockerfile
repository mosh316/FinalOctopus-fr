# Stage 1: Build Angular app
FROM node:latest as node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2: Serve the built Angular app using Nginx
FROM nginx:alpine
COPY --from=node /app/dist/fruits-angular /usr/share/nginx/html
EXPOSE 80
