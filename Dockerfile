FROM node:10-alpine

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/app

# Install dependencies
COPY app /usr/src/app
COPY ./load-balancer/nginx.conf /etc/nginx/nginx.conf
COPY wait-for.sh /usr/src/app/wait-for.sh
RUN npm install

# EXPOSE 5000

# Run the app
CMD [ "node", "app.js" ]