FROM node:14-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build


FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]