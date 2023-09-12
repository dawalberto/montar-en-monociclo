import client from '@/client'
import { Image } from '@/components'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import groq from 'groq'

const fetchPost = async (slug: string) => {
	try {
		if (!slug) {
			throw new Error('Debes indicar un slug')
		}
		const query = groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      body
    }`
		console.log('FETCHING POST! ->', slug)
		const post = await client.fetch(query, { slug })

		if (!Object.keys(post).length) {
			throw new Error(`El post con el slug "${slug}" no existe`)
		}
		return post
	} catch (error) {
		throw new Error('❌ Unexpected error', error as any)
	}
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}
			// eslint-disable-next-line jsx-a11y/alt-text
			return <Image source={value} />
		},
		// block: (test) => {
		// 	console.log('💣🚨 test', test)
		// 	return 'test'
		// },
	},
	marks: {
		// link: ({ children, value }) => {
		// 	const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
		// 	return (
		// 		<a href={value.href} rel={rel} className="text-red-400">
		// 			{children}
		// 		</a>
		// 	)
		// },
		// blockquote: (a) => {
		// 	return <span>a</span>
		// },
		// strong: () => {
		// 	return <span>SSSS TTT RRR OOO NNN GG</span>
		// },
		// em: () => {
		// 	return <span>EEE MMMM</span>
		// },
	},
}

export default async function Post({ params }: { params: { slug: string } }) {
	const { slug } = params
	const post: postObject = await fetchPost(slug)

	const {
		title = 'Missing title',
		name = 'Missing name',
		categories,
		authorImage,
		body = [],
	} = post
	return (
		<article>
			<h1>{title}</h1>
			<span>Por {name}</span>
			{authorImage && <Image source={authorImage} avatar alt={`${name}'s picture`} />}
			{categories && (
				<ul>
					Publicado en:
					{categories.map((category) => (
						<li key={category}>🦣 {category}</li>
					))}
				</ul>
			)}
			<PortableText value={body} components={portableTextComponents} />
		</article>
	)
}

type postObject = {
	title?: string
	name?: string
	categories?: string[]
	authorImage?: any
	body?: any[]
}
