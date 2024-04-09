import createMiddleware from 'next-intl/middleware';
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "@/i18n-config";
const { locales, defaultLocale } = i18n;

// const getLocale = (request) => {
//   const negotiatorHeaders = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
//
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
//   const locale = matchLocale(languages, locales, defaultLocale);
//   return locale;
// };
//
// export const middleware = (request) => {
//   const { pathname } = request.nextUrl;
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
//   );
//
//   if (pathnameHasLocale) return;
//
//   const locale = getLocale(request);
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   return Response.redirect(request.nextUrl);
// };

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ro', 'ru'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(ro|ru|en)/:path*']
  // matcher: ["/((?!_next).*)"],
};