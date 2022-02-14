# Lab 38: Redux - Asynchronous Actions

## App description

In this module, we build an e-Commerce storefront using React with Redux, coupled with live API server.

## Author

Ayrat Gimranov

## Deployed Site

https://ayrat-storefront.netlify.app/

## Phase 3

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed..

## User stories

Previous user stories:

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products
- As a user, I want to choose a category and see a list of all available products matching that category
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence
- As a user, I want to choose from products in the list and add them to my shopping cart
- As a user, I want to see the products that I’ve added to my shopping cart so that
- As a user, I want to change the quantity of items I intend to purchase in my shopping cart
- As a user, I want to be able to remove an item from my shopping cart

Added user stories:

- As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock
- As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it

## Server API

For live API, I created a Node.js exrpess server that hosts products and categories data in Postgres database. It i shosted on Heroku.

Visit https://github.com/ag961/storefront-server for back-end code.

## Resources

Instructor Alex White demo code

