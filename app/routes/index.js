const { register } = require("../controllers/AuthController");

const {
  fetchSubscribers,
  fetchDemoList,
  joinDemoList,
  joinSubscribers,
  fetchWaitList,
} = require("../controllers/UtilsController");

const router = require("express").Router();

router.post("/register", register);
router.get("/waitlist/list", fetchWaitList);

router.post("/demo/join", joinDemoList);
router.get("/demo/list", fetchDemoList);

router.post("/subscribe/join", joinSubscribers);
router.get("/subscribe/list", fetchSubscribers);

module.exports = router;
