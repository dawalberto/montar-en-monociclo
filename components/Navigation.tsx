import Link from "next/link";
import React from "react";
import styles from "./styles/navigation.module.css";

const navigationItems = [
  { label: "Inicio", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Próximamente", href: "/incoming" },
];

export const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      {navigationItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
