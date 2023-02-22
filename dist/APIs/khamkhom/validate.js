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
exports.validateResults = exports.validateSchema = void 0;
const express_validator_1 = require("express-validator");
exports.validateSchema = [
    (0, express_validator_1.check)('title')
        .not().isEmpty()
        .withMessage("ກະລຸນາປ້ອນຄຳຄົມ"),
    (0, express_validator_1.check)('created_by')
        .not().isEmpty()
        .withMessage("ກະລຸນາປ້ອນຜູ້ບັນທຶກ"),
];
const validateResults = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
    }
    next();
});
exports.validateResults = validateResults;
//# sourceMappingURL=validate.js.map