# webdriverIO

## Install Project Dependencies:
```
	npm install
```

## Run All Tests:
```
	npm test
```

## Run Critical Tests:
You add the below Mocha Option to the WDIO Config file too., so you can omit it from the below command.
```
	npm test -- --mochaOpts.grep=@critical
```


## Run A Specific Test File:
```
	npm test -- --spec=./tests/header.spec.js
```

## Run The Tests Headlessy:
```
	npm run test:headless
```
