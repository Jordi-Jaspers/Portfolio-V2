FROM node:19

LABEL version="0.0.0-SNAPSHOT"
LABEL description="A second version of my personal portfolio, built with React, Next.js, TypeScript, Tailwind CSS, and more."

# update packages, to reduce risk of vulnerabilities
RUN apt-get update && apt-get upgrade -y && apt-get autoclean -y && apt-get autoremove -y

# set a non-privileged user to use when running this image
RUN groupadd -r user && useradd -g user -s /bin/bash -d /home/user -m user
USER user

# set right (secure) folder permissions
RUN mkdir -p /home/user/app/node_modules && chown -R user:user /home/user/app
WORKDIR /home/user/app

# Copy project definition/dependencies files, for better reuse of layers
COPY --chown=user:user package*.json /home/user/app/

# Install dependencies here, for better reuse of layers
RUN npm install --legacy-peer-deps

# Copy all sources in the container (exclusions in .dockerignore file)
COPY --chown=user:user . /home/user/app

# Build the application
RUN npm run build

# exposed port/s
EXPOSE 3000

# run the application
CMD [ "npm", "run", "start" ]
