"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('profile', { title: 'Profile' });
});
exports.default = router;
//# sourceMappingURL=profile.js.map