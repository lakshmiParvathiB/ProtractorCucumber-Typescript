import { ElementFinder,element,by } from "protractor";

export class angularwebapage{

    linkAngualIo:ElementFinder;
    searchBox:ElementFinder;

    constructor(){
    this.linkAngualIo=element(by.linkText("angular.io"));
    this.searchBox=element(by.css("input[type='search']"));

    }






}