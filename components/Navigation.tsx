import Link from "next/link";
import React from "react";

const navigationItems = [
	{ label: "Inicio", href: "/" },
	{ label: "Posts", href: "/posts" },
	{ label: "Próximamente", href: "/next-posts" },
	{ label: "Comunidad", href: "/community" },
];

export const Navigation = () => {
	return (
		<ul>
			{navigationItems.map((item) => (
				<li key={item.href}>
					<Link href={item.href}>{item.label}</Link>
				</li>
			))}
		</ul>
	);
};
