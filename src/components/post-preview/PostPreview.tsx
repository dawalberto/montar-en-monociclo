'use client'

import { post } from '@/types'
import { Image } from '..'
import { useRouter } from 'next/navigation'

export default function PostPreview({ post }: { post: post }) {
	const router = useRouter()

	const { title = '', mainImage = null, slug, _createdAt = '', _updatedAt = null } = post

	const goToPost = () => {
		if (slug) {
			router.push(`/posts/${slug.current}`)
		}
	}

	return (
		<div onClick={goToPost}>
			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<Image source={mainImage} />
			<h1>{title}</h1>
		</div>
	)
}
