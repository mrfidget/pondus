FROM nginx
COPY . /usr/share/nginx/html
RUN ["chmod", "+x", "./config.sh"]
CMD ["/usr/share/nginx/html/js/config.sh"]
