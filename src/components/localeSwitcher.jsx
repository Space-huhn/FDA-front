"use client";

import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";
import Link from "next/link";

const LocaleSwitcher = () => {
  const pathName = usePathname();

  // Function to redirect the user
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="rounded-md border bg-white px-3 py-2 text-black font-bold"
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LocaleSwitcher;
