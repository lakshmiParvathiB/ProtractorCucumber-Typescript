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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@calCTest" }, function () {
    // This hook will be executed before all scenarios
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.Before({ tags: "@angularpageTest" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("i am going to execute first");
});
cucumber_1.After({ tags: "@angularpageTest" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log("i am going be executed at after the last scenario");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Test is complete");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attch(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxpREFBd0Q7QUFDeEQsMkNBQXFDO0FBR3JDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUU7SUFDMUIsa0RBQWtEO0lBQ2xELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFDLEVBQUU7SUFFakMsK0RBQStEO0lBRS9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsRUFBRTtJQUNoQyx3RUFBd0U7SUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFlLFFBQVE7O1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFHLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBRXhDLE1BQU0sVUFBVSxHQUFDLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQTtTQUNuQztJQUVELENBQUM7Q0FBQSxDQUFDLENBQUMifQ==