"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    const result = CreateCourseService_1.default.execute({
        name: "Ignite - NodeJS",
        duration: 10,
        educator: "Dani Leão"
    });
    return response.json(result);
}
exports.createCourse = createCourse;
