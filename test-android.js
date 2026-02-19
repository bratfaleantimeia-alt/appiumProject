
// restul codului tău...
const { remote } = require('webdriverio');

// CONFIGURARE: Aici punem datele de contact ale serverului tău
const wdOpts = {
    hostname: '127.0.0.1', // <-- Pune aici IP-ul TV-ului/Dispozitivului cu webOS
    port: 4723,
    path: '/',
    capabilities: {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator', // Numele de la 'adb devices'
        'appium:appPackage': 'com.android.settings', // Deschidem Settings pentru test
        'appium:appActivity': '.Settings',
        'appium:newCommandTimeout': 240
    }
};

async function runTest() {
    console.log('🚀 Se inițializează conexiunea către Appium pe webOS...');
    const driver = await remote(wdOpts);

    try {
        console.log('✅ Conectat! Emulatorul ar trebui să deschidă Setările acum.');
        
        // Luăm titlul ferestrei sau facem o pauză să vedem că s-a deschis
        await driver.pause(5000); 
        
        console.log('🎬 Test terminat cu succes.');
    } catch (error) {
        console.error('❌ Ups! Ceva nu a mers bine:', error);
    } finally {
        await driver.deleteSession();
    }
}

runTest();