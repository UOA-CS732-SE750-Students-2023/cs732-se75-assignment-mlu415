import { Express } from "express";

import {signinController, signupController} from "../controllers/userController"

const router = express.Router()

router.post("/signup", signupController)
router.post("/signin", signinController)

module.exports = router;