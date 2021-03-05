/* import { Config } from "protractor";
import { protractor } from "protractor/built/ptor";

import {Config} from "protractor"; */





import {Config} from "protractor";

                                                                                      
export let config:   Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    //directConnect:true,
    capabilities:{

        browserName: 'chrome'
    },
    specs: ['testspec.js'],

  jasmineNodeOpts: {
   
    showColors:true
  }   
 
 
  };  