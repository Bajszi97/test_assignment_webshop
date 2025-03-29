FROM node:latest

COPY startup.sh /opt/startup.sh
RUN chmod +x /opt/startup.sh

CMD ["/bin/bash", "/opt/startup.sh"]
