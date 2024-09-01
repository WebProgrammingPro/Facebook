import { auth } from "@/auth";

import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./router";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
