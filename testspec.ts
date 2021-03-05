import {browser,element,by} from 'protractor'; 
import { angularwebapage } from './pageObjects/angularWebaPage';
import { calculator } from './pageObjects/calculator';



describe('chainLocators',function()  {                              
    it('using async and wait',async()=>{

        let calC=new calculator();
        
    
       await browser.get('http://juliemr.github.io/protractor-demo/');
       //repeaters , chain locators
     await  calC.firstEditBox.sendKeys("3");

     await calC.secondEditBox.sendKeys("4");
     await calC.goButton.click();
      calC.textResult.getText().then(function(text){

            console.log(text);

        })

        browser.sleep(3000);

    })

 it('titleValidation for Angular web page',async () => {

    browser.get("https://angularjs.org/");
        let anularPage=new angularwebapage();
        await anularPage.linkAngualIo.click();
        await browser.sleep(3000);
    await anularPage.searchBox.sendKeys("hello");
     
 })


})