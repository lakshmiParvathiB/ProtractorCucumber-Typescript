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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const angularWebaPage_1 = require("./pageObjects/angularWebaPage");
const calculator_1 = require("./pageObjects/calculator");
describe('chainLocators', function () {
    it('using async and wait', () => __awaiter(this, void 0, void 0, function* () {
        let calC = new calculator_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeaters , chain locators
        yield calC.firstEditBox.sendKeys("3");
        yield calC.secondEditBox.sendKeys("4");
        yield calC.goButton.click();
        calC.textResult.getText().then(function (text) {
            console.log(text);
        });
        protractor_1.browser.sleep(3000);
    }));
    it('titleValidation for Angular web page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get("https://angularjs.org/");
        let anularPage = new angularWebaPage_1.angularwebapage();
        yield anularPage.linkAngualIo.click();
        yield protractor_1.browser.sleep(3000);
        yield anularPage.searchBox.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE4QztBQUM5QyxtRUFBZ0U7QUFDaEUseURBQXNEO0FBSXRELFFBQVEsQ0FBQyxlQUFlLEVBQUM7SUFDckIsRUFBRSxDQUFDLHNCQUFzQixFQUFDLEdBQU8sRUFBRTtRQUUvQixJQUFJLElBQUksR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUczQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsNEJBQTRCO1FBQzlCLE1BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsQ0FBQyxDQUFDLENBQUE7UUFFRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUwsRUFBRSxDQUFDLHNDQUFzQyxFQUFDLEdBQVMsRUFBRTtRQUVsRCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksVUFBVSxHQUFDLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLE1BQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdILENBQUMsQ0FBQyxDQUFBIn0=