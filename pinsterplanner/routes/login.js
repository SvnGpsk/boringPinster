"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.post('/', (req, res) => {
    // TODO login logic
    console.log(req.body);
    res.redirect('/profile');
});
exports.default = router;
//# sourceMappingURL=login.js.map