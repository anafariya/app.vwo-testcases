const { Builder, By, Key, until } = require('selenium-webdriver');

// Define the URL of the login page
const loginPageURL = 'https://app.vwo.com/login'; // Replace with the actual URL

// Define test credentials
const username = 'yourUsername';
const password = 'yourPassword';

(async function () {
  // Create a new WebDriver instance (using Chrome in this example)
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the login page
    await driver.get(loginPageURL);

    // Find the username and password input fields and the login button
    const usernameField = await driver.findElement(By.id('username')); // Replace with the actual element locator
    const passwordField = await driver.findElement(By.id('password')); // Replace with the actual element locator
    const loginButton = await driver.findElement(By.id('login-button')); // Replace with the actual element locator

    // Enter the username and password
    await usernameField.sendKeys(username);
    await passwordField.sendKeys(password);

    // Click the login button
    await loginButton.click();

    // Wait for a specific element on the next page to ensure the login was successful
    await driver.wait(until.elementLocated(By.id('dashboard')), 10000); // Replace with the actual element locator on the next page

    // Assertion: Check if the user is on the dashboard page
    const dashboardElement = await driver.findElement(By.id('dashboard')); // Replace with the actual element locator
    if (dashboardElement) {
      console.log('Login successful! Test passed.');
    } else {
      console.error('Login failed! Test failed.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
