'use client'

import { useRouter } from 'next/navigation'
import { default as styles } from './menu.module.css'

const navigationItems = [
	{ label: 'Inicio', href: '/', className: 'home-item' },
	{ label: 'Posts', href: '/posts', className: 'posts-item' },
	{ label: 'Próximamente', href: '/next-posts', className: 'next-posts-item' },
	{ label: 'Comunidad', href: '/community', className: 'community-item' },
]

export const Menu = () => {
	const router = useRouter()
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				{navigationItems.map((item) => (
					<li
						key={item.href}
						onClick={() => router.push(item.href)}
						className={`${styles[item.className]} ${styles.li}`}
					>
						{item.label}
					</li>
				))}
			</ul>
		</nav>
	)
}
