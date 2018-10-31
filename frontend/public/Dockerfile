FROM nginx
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html/js
RUN ["chmod", "+x", "./config.sh"]
RUN ["./config.sh"]
