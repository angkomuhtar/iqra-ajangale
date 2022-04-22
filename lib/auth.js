import jwt from "jsonwebtoken";
import cookies from "next-cookies";

export const verifyToken = (ctx) => {
  return new Promise((resolve) => {
    const allCookies = cookies(ctx);

    if (!allCookies.token) {
      return ctx.res
        .writeHead(302, {
          Location: "/",
        })
        .end();
    }

    try {
      let decoded = jwt.verify(allCookies.token, process.env.JWT_SECRET);
      return resolve({
        token: allCookies.token,
      });
    } catch (err) {
      return ctx.res
        .writeHead(302, {
          Location: "/",
        })
        .end();
    }
  });
};
