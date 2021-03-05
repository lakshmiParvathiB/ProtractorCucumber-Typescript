"use strict";
//import * as reporter from "cucumber-html-reporter";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../featureFiles/calc.feature'],
    cucumberOpts: {
        // require step definitions
        tags: "@calCTest",
        format: "json:./cucumberjson.json",
        require: [
            './stepDefinations/*.js' // accepts a glob
        ]
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EscURBQXFEOzs7QUFNMUMsUUFBQSxNQUFNLEdBQWE7SUFDMUIsa0RBQWtEO0lBRWxELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBQyxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQzlELFlBQVksRUFBQztRQUVULFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBQ0QsS0FBSyxFQUFFLENBQUMsOEJBQThCLENBQUM7SUFFdkMsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzNCLElBQUksRUFBQyxXQUFXO1FBRWxCLE1BQU0sRUFBQywwQkFBMEI7UUFHL0IsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCLENBQUMsaUJBQWlCO1NBQzNDO0tBR0w7Q0FHRCxDQUFDIn0=