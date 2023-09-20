export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    hostname: 'hub.browserstack.com',

    services: [['browserstack', {
        buildIdentifier: "${BUILD_NUMBER}"
    }]],

    capabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'firefox'
    }, {
        browserName: 'safari'
    }, {
        browserName: 'MicrosoftEdge'
    }],

    maxInstances: 10,

    specs: [
        './src/features/**/webapp.feature'
    ],
    exclude: [],

    logLevel: 'info',
    baseUrl: 'https://www.dailymail.co.uk',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'cucumber',
    reporters: ['spec', 'cucumberjs-json', 'html-nice'],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./src/step-definitions/*.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
};