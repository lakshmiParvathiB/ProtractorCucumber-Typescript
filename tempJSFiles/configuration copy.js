"use strict";
/* import { Config } from "protractor";
import { protractor } from "protractor/built/ptor";

import {Config} from "protractor"; */
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['testspec.js'],
    jasmineNodeOpts: {
        showColors: true
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7cUNBR3FDOzs7QUFTMUIsUUFBQSxNQUFNLEdBQWE7SUFDMUIsa0RBQWtEO0lBRWxELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFlBQVksRUFBQztRQUVULFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBQ0QsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBRXhCLGVBQWUsRUFBRTtRQUVmLFVBQVUsRUFBQyxJQUFJO0tBQ2hCO0NBR0EsQ0FBQyJ9