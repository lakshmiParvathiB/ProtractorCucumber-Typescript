


//import * as reporter from "cucumber-html-reporter";


import {Config} from "protractor";

                                                                                      
export let config:   Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    
    directConnect:true,
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    capabilities:{

        browserName: 'chrome'
    },
    specs: ['../featureFiles/calc.feature'],

    cucumberOpts: { 
        // require step definitions
        tags:"@calCTest",
        
      format:"json:./cucumberjson.json",//ccucumber reporting dependency
   
    
        require: [
          './stepDefinations/*.js' // accepts a glob
        ]
    

   },
 
 
  };  