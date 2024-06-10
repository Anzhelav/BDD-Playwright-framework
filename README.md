# BDD-Playwright-framework
Welcome to the BDD Playwright Framework! This is a demo version of a testing framework created using Playwright automation library with TypeScript programming language and Cucumber binding. This framework provides a structured approach to writing automated tests using Behavior-Driven Development (BDD) principles, making it easier to collaborate and communicate between stakeholders.

# Get Started 
1.Clone project
2.Open in VS-Code
3.Use "npm i" command to install the dependencies
4.Use "npx playwright install" to install the browsers
5.Use "npm test" command to run tests

# Framework structure
- src/hooks: This directory contains browser setup hooks as well as page fixture files for sharing objects across tests.
- src/pages: This directory houses reusable methods tailored to perform specific actions on distinct UI pages. Each file corresponds to a separate page, ensuring clear organization and modularity.
- src/test/features: This directory hosts test cases written in human-readable Gherkin language. By expressing test scenarios in this format, we ensure clarity and accessibility for all stakeholders, promoting collaboration and understanding across the development team.
- src/test/steps: Within this directory reside step definitions, implementing reusable test steps outlined in feature files. By structuring them separately, we enhance code maintainability and facilitate reusability across different test scenarios.

#        Test Plan

Features to be tested: 
  Login 
  Register
  Product Catalog
  Search
  Shopping Cart
  Ordering Products

Featues not to be tested:

Test Levels And Types: 
  Test Levels
    Component Testing
    Integration Testing
    System Testing
  Test Types
    Functional Testing
    Regression Testing

Exit Criteria:
  Testing is finished and there are no functional defects
  All high risk areas are tested
  No critical or high severity bugs are left
  No more than 10% of medium severity bugs are open

Suspension Criteria
  50% or more test cases failed
  Critical Bugs Are open and they are blocking testing
  All remaining test cases are blocked by an open bug

Test Deliverables
  Test Plan
  Functional Test Cases
  Logging defects in Jira
  Daily/weekly status report
  Test Closure Reports

  






