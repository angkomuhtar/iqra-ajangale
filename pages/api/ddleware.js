// export function middleware(event) {
//   //   const Auth = Req;
//   //   console.log(Auth);
//   //   if (Req.url.includes("api/auth/")) {
//   //     return NextResponse.next();
//   //   }
//   //   if (!Auth) {
//   //     return new NextResponse(JSON.stringify({ message: Req.url }), {
//   //       status: 401,
//   //     });
//   //   }
//   //   return NextResponse.next();
// }]
// import jwt from "jsonwebtoken";
// import { NextRequest, NextResponse } from "next/server";

// export default function middleware(request, event) {
//   const Bearer = request.headers.get("Authorization");
//   let pathname = request.nextUrl.pathname;
//   if (pathname.includes("api/auth/")) return NextResponse.next();
//   if (!Bearer) {
//     return Response("Unauthorized", {
//       headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
//       status: 401,
//     });
//   } else {
//     const [authType, authToken] = Bearer.split(" ");
//     return jwt.verify(authToken, "secret", function (err, decoded) {
//       if (err) {
//         return Response("Unauthorized Token", {
//           headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
//           status: 401,
//         });
//       }
//       return NextResponse.next();
//     });
//     console.log(authType, authToken);
//   }
// }
