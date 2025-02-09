"use client";
import {usePathname} from "next/navigation";
import {i18n} from "@/i18n-config";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from "react";
import {LocalSwitcherStyled} from "@/components/UI/LocalSwitcher/styled";

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
    <LocalSwitcherStyled>
      <button
        onClick={() => setVisible(!visible)}
        className="switcherButton"
      >
        {currentLang}
        <KeyboardArrowDownIcon
          className={`${visible ? "active" : ""} arrow`}
        />
      </button>

      <ul className={`list ${visible ? "visible" : ""}`}>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className="link"
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </LocalSwitcherStyled>
  );
};

export default LocaleSwitcher;