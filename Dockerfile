# The Node version that we'll be running for our version of React.
# node-alpine is the specialized base image we're using. It has node installed.
# Alpine is a very tiny linux distribution, about 4 MB in size
FROM node:12-alpine
# "alpine's package manager is called apk and it's a bit different than apt-get"

# Add "metadata" to image with LABEL command:
#   metadata is sometimes used by external programs, for example nvidia-docker
#   requires a label to work properly.
LABEL maintainer "TrevorMcDougald"


# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
        # WORKDIR command changes the default directory, which is where we run our
        # RUN / CMD / ENTRYPOINT commands
WORKDIR /app
        # Prefer the COPY command over the ADD command
        # COPY is simpler, ADD has logic for downloading remote files &
        # extracting archives.
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
RUN npm install --production --silent && mv node_modules ../

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000
