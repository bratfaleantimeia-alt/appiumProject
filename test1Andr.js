const { remote } = require('webdriverio');

const capabilities = {
    platformName: 'Android', // sau 'iOS'
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    // CALEA CĂTRE FIȘIERUL DESCARCĂT
    'appium:app': '/Users/timeia.corha/Downloads/Android-MyDemoAppRN.1.3.0.build-244.apk', 
    'appium:newCommandTimeout': 240
};

async function start() {
    const driver = await remote({
        hostname: '127.0.0.1',
        port: 4723,
        path: '/',
        capabilities
    });

    // TEST: Verificăm dacă aplicația s-a deschis și dăm click pe un produs
    const cartIcon = await driver.$('~cart badge'); // Selector tipic React Native
    await cartIcon.click();

    console.log("Am dat click pe coșul de cumpărături!");
    await driver.deleteSession();
}

start();