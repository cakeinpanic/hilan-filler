const { defineConfig } = require('cypress');
const dotenv = require('dotenv');
dotenv.config()
module.exports = defineConfig({
  env: {
    startTime: '09:00',
    endTime: '18:00',
    hilanUrl: process.env.HILAN_URL,
    user: process.env.HILAN_USER,
    password: process.env.HILAN_PASSWORD,
  },
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
  },
});
