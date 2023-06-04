# base image
FROM node:18-alpine as builder

WORKDIR /app
COPY . . 
RUN npm install --force
RUN npm run build --prod
FROM nginx:alpine 
COPY --from=builder /app/dist/carya-frontend /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]