/*
NOTES:
    * Only authenticated users can access those routes - apply a middleware [X].
    * Validate data with express validator [].

*/

import express from 'express';
import { body } from 'express-validator';

import {
    getMacros,
    getMenu,
    getProfileInfo,
    putMacros,
    putMenu,
    putProfileInfo,
} from '../controllers/profile.controller.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

export const profileRouter = express.Router();

profileRouter.get('/info', isAuthenticated, getProfileInfo);
profileRouter.put(
    '/info',
    body('email').isEmail(),
    body('age').isNumeric(),
    body('firstName').trim().isAlpha(),
    body('lastName').trim().isAlpha(),
    isAuthenticated,
    putProfileInfo
);
profileRouter.get('/macros', isAuthenticated, getMacros);

//calories, fats, carbs, proteins - validator
profileRouter.put('/macros', isAuthenticated, putMacros);

profileRouter.get('/menu', isAuthenticated, getMenu);

profileRouter.put('/menu', isAuthenticated, putMenu);
