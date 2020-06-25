import express = require('express');
const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
    // TODO login logic
    console.log(req.body);
    res.redirect('/profile');
});

export default router;