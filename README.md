# Flash Translate Browser Extension

The Flash Translate Browser Extension was built in conjunction with my Flash Translate web applcation [Flash Translate](https://evening-temple-42477.herokuapp.com).  This browser extension will translate any word on a webpage into a desired languaged.  Additionally the browser extension can save the translation as a flashcard which can be reviewed on the Flash Translate webpage.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)

## Development Setup Instructions

* Run `npm install`

Save the application on your local computer and navigate here to upload the extension to Chrome [Chrome Developer Tools](chrome://extensions/).  Once you have uploaded the extension it will be available to use.  A username and password need to be created on [Flash Translate](https://evening-temple-42477.herokuapp.com).

## Running the tests

You can test the translation portion of the extension by highlighting a word on a webpage, opening the extension, and clicking translate.  You must be logged in for the translation to work.

* Note: The at this time the extension is hardwired for my current account.  Words will translate from Norwegian to English and saving a word will save it to my personal database. You can test the translation here [Wikipedia](https://no.wikipedia.org/wiki/Darth_Vader).

### Completed Features

- [x] Browser Extension accepted by Chrome.
- [x] Loggin to a valid account
- [x] Translation routed through Flash Translate website
- [x] Save words to Flash Translate database

### Next Steps

- [ ] Allow two way translation (Norwegian to English / English to Norwegian)
- [ ] Grab settings for the user account that is logged in to allow translations to a choice language
- [ ] Allow users to post translations into thier database

## Authors

* **Trevor Dammon** - [Github](https://github.com/tdammon)



