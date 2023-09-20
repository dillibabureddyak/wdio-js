## WebDriverIO & Cucumber Template with Page Object Model to test Desktop Web and Mobile application

### Pre-requisites
* NodeJS
* Any preferred IDE

### How to run?
Set the Browserstack credentials (`BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY`) in the environment variables

Upload the applications (`ipa` and `apk`) to Browerstack and set those paths (`ANDROID_APP` and `IOS_APP`) in environment variables

Install the dependencies issue the below commands in project root directory
```javascript
npm install
``` 
To run the mobile tests issue the below command
```javascript
npm run app
``` 
To run the browser tests issue the below command
```javascript
npm run web
``` 