const { test, expect } = require('@playwright/test');


test('Login check @prod', async ({ page }) => {
    test.setTimeout(100000);
    await page.pause();
    await page.goto('https://portal.ringrx.com/login');
    await page.fill('[placeholder="Enter Login"]', 'test');
    await page.fill('[placeholder="Enter Password"]', 'test');
    await page.click('button', { name: "Sign in" });
    //await page.waitForSelector('');
    await page.getByTitle('Dismiss this notification').locator('path').click();

});
