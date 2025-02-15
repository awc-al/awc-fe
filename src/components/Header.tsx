"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ usePathname instead of useRouter
import styles from "@/styles/header.module.css";

interface HeaderProps {
  position?: "absolute" | "static"
}
const Header: React.FC<HeaderProps> = ({ position = "absolute" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current route

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${position === "absolute" ? styles.absolute : styles.static}`}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/AWC-LOGO.svg"
            alt="Albania Wedding Company Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Hamburger Menu */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul>
            {["Home", "Services", "Contact"].map((item) => {
              const path = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <Link
                    href={path}
                    className={pathname === path ? styles.active : ""}
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
