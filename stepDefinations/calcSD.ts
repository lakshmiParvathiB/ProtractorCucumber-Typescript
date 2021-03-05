import { Given, Then, When } from "@cucumber/cucumber";
import { browser } from "protractor";
import { angularwebapage } from "../pageObjects/angularWebaPage";
import {calculator} from "../pageObjects/calculator";
import chai from "chai";
var expect = chai.expect;

let anularPage=new angularwebapage();
let calC=new calculator();
Given(':i am on Calc page', async ()=> {
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });

Given(':i am on {string} page', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
   
   if(string=="Calc"){

    await browser.get('http://juliemr.github.io/protractor-demo/');
   }
   else if(string=="angularwebpage1"){
   await browser.get("https://angularjs.org/");

   }

   
});

 
When(':when i click on angular.io link', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    
        await anularPage.linkAngualIo.click();
  });
  Then(':enter the text {string} in search feild', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
    await anularPage.searchBox.sendKeys(string);
  });

  When(':when i enter number {string} and number {string}', async(string, string2)=> {   
 
    await  calC.firstEditBox.sendKeys(string);

    await calC.secondEditBox.sendKeys(string2);
    // Write code here that turns the phrase above into concrete actions
    
  });

  

  Then(':the result shold be {string}', async (expectedResult)=> {

    await calC.goButton.click();
      await calC.textResult.getText().then(function(actualTextElement){
       
            console.log("actual msg is " +actualTextElement);
             expect(actualTextElement).to.equal(expectedResult);

        })

        browser.sleep(3000);

    // Write code here that turns the phrase above into concrete actions
   
  });


