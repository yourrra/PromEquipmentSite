FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./config/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]