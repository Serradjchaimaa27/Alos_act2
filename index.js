const express = require('express');
const app = express();
const surahs = require('./surahs.json');
const { body, validationResult } = require('express-validator'); 


app.use(express.json());
app.use(logErrors);
app.use(surahsErrorHandler);
app.use(errorHandler);
