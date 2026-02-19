const { remote } = require('webdriverio');

const iosOptions = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities: {
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 15', // Schimbă cu ce ai tu în Simulator
        'appium:platformVersion': '17.5', // Schimbă cu versiunea ta de iOS
        'appium:bundleId': 'com.apple.Preferences', // Deschidem Settings pe iOS
        'appium:newCommandTimeout': 240
    }
};

async function runIOSTest() {
    console.log('🚀 Se inițializează conexiunea către Simulatorul iOS...');
    try {
        const driver = await remote(iosOptions);
        console.log('✅ Conectat! Simulatorul ar trebui să deschidă Settings.');

        await driver.pause(5000);

        await driver.deleteSession();
        console.log('🎬 Sesiune iOS închisă.');
    } catch (error) {
        console.error('❌ Eroare iOS:', error);
    }
}

runIOSTest();