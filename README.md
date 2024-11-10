# Demo Evershop Automation

This project is a WebdriverIO-based automation test suite for the Evershop demo website. The tests are written using WebdriverIO and Allure for generating reports.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Saurav-Chakraborty7/Sauce-Demo-Automation.git
cd Sauce-Demo-Automation
```

### 2. Install Node Modules

To get started, install the required node modules by running:

```bash
npm install
```

### 3. Install WebdriverIO

If you haven't already, install WebdriverIO via npm:

```bash
npm install @wdio/cli --save-dev
```

### 4. Install Allure Reporter

For generating test reports, we use the Allure reporter. Install it using:

```bash
npm install @wdio/allure-reporter --save-dev
npm i allure-commandline
```

### 5. Run Tests

- To run tests suite-wise (e.g., purchase suite):

```bash
npm run purchase
```

### 6. Generate Allure Report

Once the tests have completed, you can generate and view the Allure report:

```bash
npm run getReport
```

This command will generate the report from the test results and open it in your default browser.

## Project Structure

- **test/spec**: Contains the test specifications.
- **test/pages**: Contains the Page Object Model (POM) files for organizing locators and actions.
- **allure-results**: Stores the results generated after running tests, which are then used to create reports in Allure.

## Completed Testing Tasks

### Task 1: Search Functionality

- **UI Automation:** Verified that search functionality returns accurate and relevant results for various search terms.

### Task 2: Cart Operations

- **Add Items to Cart:** Added multiple items to the cart and verified correct item names and quantities.
- **Cart Update Verification:** Checked that updates to cart items, such as quantity changes and removals, function as expected.

### Task 3: Checkout Process

- **Final Checkout Verification:** Proceeded through the final checkout page to validate product names and total price accuracy.
- **Order Completion:** Completed the purchase journey and verified the successful order message displayed at the end of the process.
