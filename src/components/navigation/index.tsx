import { MouseEventHandler, useCallback } from "react";

import { CONFIG } from "config/app";

import styles from "./index.module.css";

export function NavigationBar(): JSX.Element {
  const handleScroll: (id: string) => MouseEventHandler<HTMLAnchorElement> =
    useCallback((id: string) => {
      return (e) => {
        e.preventDefault();

        const element = document.getElementById(id)?.offsetTop;
        if (element) {
          window.scrollTo({ top: element, behavior: "smooth" });
        }
      };
    }, []);

  const handleScrollToTop: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (e) => {
      e.preventDefault();

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    []
  );

  return (
    <nav className={styles.nav}>
      <li>
        <a href="#" onClick={handleScrollToTop}>
          Home
        </a>
      </li>
      <li>
        <a
          href={`#${CONFIG.COMPONENTS_ID.DONATE}`}
          onClick={handleScroll(CONFIG.COMPONENTS_ID.DONATE)}
          className={styles.donate}
        >
          Donate
        </a>
      </li>
      <li>
        <a
          href={`#${CONFIG.COMPONENTS_ID.ABOUT}`}
          onClick={handleScroll(CONFIG.COMPONENTS_ID.ABOUT)}
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href={`#${CONFIG.COMPONENTS_ID.CONTACT_US}`}
          onClick={handleScroll(CONFIG.COMPONENTS_ID.CONTACT_US)}
        >
          Contact Us
        </a>
      </li>
    </nav>
  );
}
