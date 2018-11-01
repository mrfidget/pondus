FROM nginx
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html/js
# ENTRYPOINT ["config.sh"]
RUN ["chmod", "+x", "./config.sh"]
CMD ["/usr/share/nginx/html/js/config.sh"]
