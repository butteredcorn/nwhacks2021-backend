"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./src/database/database"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./src/app"));
dotenv_1.default.config();
const app = app_1.default(database_1.default);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});
