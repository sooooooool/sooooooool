const express = require("express");
const router = express.Router();
const passport = require("passport");
const { join, login, logout } = require("../controllers/auth");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user?.Followers?.length || 0;
  res.locals.followingCount = req.user?.Followings?.length || 0;
  res.locals.followingIdList = req.user?.Followings?.map((f) => f.id) || [];
  next();
});

// router.post("/join", isNotLoggedIn, join);
router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", { title: "회원가입 - MyApp" });
});

router.post("/login", isNotLoggedIn, login);

router.get("/logout", isLoggedIn, logout);

router.get(
  "/login",
  isNotLoggedIn,
  passport.authenticate("local", {
    failureRedirect: "/auth/login", // 로그인 실패 시 이동할 경로
    failureFlash: true, // 실패 시 플래시 메시지 사용
  }),
  (req, res) => {
    res.redirect("/"); // 로그인 성공 시 이동할 경로
  }
);

router.get(
  "/kakao",
  passport.authenticate("kakao", {
    failureRedirect: "/?loginError=카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/"); //성공 시에는 /로 이동
  }
);

router.get("/naver", passport.authenticate("naver"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/?loginError=카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/"); //성공 시에는 /로 이동
  }
);

router.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "/?loginError=네이버로그인 실패",
  }),
  (req, res) => {
    res.redirect("/"); //성공 시에는 /로 이동
  }
);

module.exports = router;
