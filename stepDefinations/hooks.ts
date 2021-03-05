
import {After,Before, Status} from "@cucumber/cucumber";
import { browser } from "protractor";


Before({tags: "@calCTest"}, function () {
  // This hook will be executed before all scenarios
  browser.manage().window().maximize();
  
});

Before({tags: "@angularpageTest"}, function () {
  
  // This hook will be executed before scenarios tagged with @foo

  console.log("i am going to execute first");
});

After({tags: "@angularpageTest"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
console.log("i am going be executed at after the last scenario");
});

After(async function(scenario) {
console.log("Test is complete");
if(scenario.result.status===Status.FAILED){

  const screenshot=await browser.takeScreenshot();
  this.attch(screenshot,"image/png")
}

});