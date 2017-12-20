
var express = require('express');
var router = express.Router();

require("./overview/nation/nation")(router);
require("./system/system")(router);

module.exports = router;
