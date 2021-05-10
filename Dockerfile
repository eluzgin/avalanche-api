FROM node:14.14.0
COPY . /usr/app/
WORKDIR /usr/app
RUN yarn install
ENV PORT=3000
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
