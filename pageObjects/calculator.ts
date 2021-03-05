import { ElementFinder,element,by } from "protractor";

//add a keyword export to make this class available to other classes
export class calculator{
  
    firstEditBox:ElementFinder;
    secondEditBox:ElementFinder;
    goButton:ElementFinder;
    textResult:ElementFinder
    //create a constructor to create methods for the objects
    constructor(){

        this.firstEditBox=element(by.model("first"));
        this.secondEditBox=element(by.model("second"));
        this.goButton=element(by.id("gobutton"));
        this.textResult=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }
} 