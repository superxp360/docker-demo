# Use the Node.js 18 Alpine base image
FROM node:18-alpine3.18

# Set the working directory for the container to /src/
WORKDIR /src/

# Copy the local files to the container's working directory
COPY . .

# Run `npm install` to install the dependencies listed in the package.json file
RUN npm install

# Set an environment variable for the port on which the server will run
ENV PORT=5055

# Expose port 5055 to allow incoming traffic to the container
EXPOSE 5055

# Set the command to run when the container is started
CMD ["npm", "start"]