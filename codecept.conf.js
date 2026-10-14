const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const capabilities = {
  'browserName': 'Chrome',
  // Pinned to Chrome 135 on purpose. CDP itself still works on newer Chrome, but from
  // Chrome 136 --remote-debugging-port is ignored when Chrome runs on its default profile
  // (https://developer.chrome.com/blog/remote-debugging-port). The HyperExecute VM starts
  // Chrome that way, so with 'latest' the CDP connection never opens. Switch back to
  // 'latest' once the VM launches Chrome with its own --user-data-dir.
  'browserVersion': '135',
  'LT:Options': {
    'platform': process.env.HYPEREXECUTE_PLATFORM,
    'build': 'Puppeteer CodeceptJS HyperExecute Build',
    'name': 'Puppeteer CodeceptJS HyperExecute Test',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true
  }
};

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      chrome: {
        browserWSEndpoint: `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
        "ignoreHTTPSErrors": true,
        // Chrome's privacy sandbox dialog shows up as a page that never attaches and hangs the helper
        targetFilter: (target) => !target.url().startsWith('chrome://privacy-sandbox-dialog')
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'puppeteer-codecept-sample',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
