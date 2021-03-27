/*
NOTES:
    * Only authenticated users can access those routes - apply a middleware [X].
    * Validate data with express validator [].

*/

import express from 'express';
import { getProfileInfo } from '../controllers/profile.controller.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

export const profileRouter = express.Router();

profileRouter.get('/info', isAuthenticated, getProfileInfo);
