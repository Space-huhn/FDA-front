"use client";

import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState, useTransition} from "react";

const LocaleSwitcher = ({currentLang}) => {
  const pathName = usePathname();
  const [visible, setVisible] = useState(false);

  // Function to redirect the user
  const redirectedPathName = (locale) => {
    if (!pathName) {
      return "/";
    }
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
      <div className='wrapper'>
        <button
            onClick={() => setVisible(!visible)}
            className='rounded-md px-3 py-1 text-black bg-white font-bold uppercase'
        >
          {currentLang}
          <KeyboardArrowDownIcon
              className={[visible ? "rotate-180": "", "rotateAnimation"].join(" ")}
          />
        </button>

        <ul className= {[visible ? "visible": "",
          "list rounded-md flex gap-x-3 bg-white py-2 px-3 bd top-9 shadow"].join(" ")}>
          {i18n.locales.map((locale) => {
            return (
              <li key={locale}>
                <Link
                  href={redirectedPathName(locale)}
                  className="rounded-md px-3 py-2 text-black font-bold uppercase"
                >
                  {locale}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default LocaleSwitcher;
