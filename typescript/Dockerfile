FROM node:16
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node
COPY --chown=node:node . ./
RUN npm install
RUN npm run build

# Build and run-time variables
# ARG PORT
# ENV PORT=$PORT

# EXPOSE 8000
CMD [ "npm", "run", "start" ]
