const { Router } = require('express');
const beachRouter = Router();
const { getAllBeaches } = require("../controllers/beachCtrl")

beachRouter.get('/beaches', getAllBeaches);

module.exports = beachRouter;
