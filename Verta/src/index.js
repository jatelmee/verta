"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("Components/App"));
require("styles/main.sass");
require("styles/normalize.css");
react_dom_1.default.render(jsx_runtime_1.jsx(App_1.default, {}, void 0), document.getElementById("root"));
//# sourceMappingURL=index.js.map