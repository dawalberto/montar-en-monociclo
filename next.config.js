import { join } from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.sanity.io'],
	},
	sassOptions: {
		includePaths: [join(__dirname, 'styles')],
	},
}

export default nextConfig
