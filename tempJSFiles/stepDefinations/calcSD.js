"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const angularWebaPage_1 = require("../pageObjects/angularWebaPage");
const calculator_1 = require("../pageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let anularPage = new angularWebaPage_1.angularwebapage();
let calC = new calculator_1.calculator();
cucumber_1.Given(':i am on Calc page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.Given(':i am on {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "Calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "angularwebpage1") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When(':when i click on angular.io link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield anularPage.linkAngualIo.click();
}));
cucumber_1.Then(':enter the text {string} in search feild', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield anularPage.searchBox.sendKeys(string);
}));
cucumber_1.When(':when i enter number {string} and number {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calC.firstEditBox.sendKeys(string);
    yield calC.secondEditBox.sendKeys(string2);
    // Write code here that turns the phrase above into concrete actions
}));
cucumber_1.Then(':the result shold be {string}', (expectedResult) => __awaiter(void 0, void 0, void 0, function* () {
    yield calC.goButton.click();
    yield calC.textResult.getText().then(function (actualTextElement) {
        console.log("actual msg is " + actualTextElement);
        expect(actualTextElement).to.equal(expectedResult);
    });
    protractor_1.browser.sleep(3000);
    // Write code here that turns the phrase above into concrete actions
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY1NELmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL2NhbGNTRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUM7QUFDckMsb0VBQWlFO0FBQ2pFLDBEQUFxRDtBQUNyRCxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLFVBQVUsR0FBQyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNyQyxJQUFJLElBQUksR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixnQkFBSyxDQUFDLG9CQUFvQixFQUFFLEdBQVEsRUFBRTtJQUNsQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLGdCQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUM1QyxvRUFBb0U7SUFFckUsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUFDO1FBRWpCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUMvRDtTQUNJLElBQUcsTUFBTSxJQUFFLGlCQUFpQixFQUFDO1FBQ2xDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUUzQztBQUdKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsa0NBQWtDLEVBQUUsR0FBUSxFQUFFO0lBQy9DLG9FQUFvRTtJQUVoRSxNQUFNLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQy9ELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxtREFBbUQsRUFBRSxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUVoRixNQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0Msb0VBQW9FO0FBRXRFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBTyxjQUFjLEVBQUMsRUFBRTtJQUU1RCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLGlCQUFpQjtRQUV6RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV4RCxDQUFDLENBQUMsQ0FBQTtJQUVGLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhCLG9FQUFvRTtBQUV0RSxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=