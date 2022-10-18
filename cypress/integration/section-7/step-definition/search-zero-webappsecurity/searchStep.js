/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
// import pageSearch from './searchPage'


Given('I open the Zero Webappsecurity website', () => {
    // pageSearch.visit();
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When('I typed the word "Online Banking" on the searchbar and pressed Enter Key', () => {
    cy.get('#searchTerm').type('online banking{enter}')
});

Then('I should get the search result about "Online Banking" in the Zeroappsecurity', () => {
    cy.get('a').parent('li').should('contain', 'Zero - Free Access to Online Banking')
});