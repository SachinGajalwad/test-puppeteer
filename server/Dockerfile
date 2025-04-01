FROM ghcr.io/puppeteer/puppeteer:24.4.0

# Set environment variables
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH="$(which google-chrome-stable || echo /usr/bin/google-chrome-stable)"

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock first to leverage Docker cache
COPY package.json yarn.lock ./

# Install dependencies using Yarn (production-only for leaner image)
RUN yarn install --frozen-lockfile --production

# Copy the rest of the application
COPY . .

# Build TypeScript files
RUN yarn build

# Ensure correct permissions for execution
RUN chmod +x dist/server.js

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/server.js"]
