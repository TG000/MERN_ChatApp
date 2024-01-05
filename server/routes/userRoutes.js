const { register, login, setAvatar, getAllUsers } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/set_avatar/:id", setAvatar);

router.get("/all_users/:id", getAllUsers);

module.exports = router;
