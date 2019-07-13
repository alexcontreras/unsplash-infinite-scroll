module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "3d2d42af71f2ab5c43cf557649030e29f9a7711c2d7984a0e99e88f05204d48e",
  SECRET:
    process.env.SECRET ||
    "1789cd4b22b989bcd8bbdeafc62f6452f3e53608f3392c63dd6cff629815356d",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
