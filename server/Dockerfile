FROM ghcr.io/puppeteer/puppeteer:24.4.0

# Set environment variables
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock (if available) to leverage caching
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --production

# Copy the rest of the application
COPY . .

# Build TypeScript files
RUN yarn build

# Expose the port the app runs on (if needed)
EXPOSE 3000

# Start the application
CMD [ "node", "dist/server.js" ]