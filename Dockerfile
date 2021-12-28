FROM node:14
WORKDIR /es6-tests
RUN mkdir tmp
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD ["npm", "test"]