export type post = {
	_createdAt?: string
	_rev?: string
	_type?: 'post' | string
	_id?: string
	slug?: {
		current?: string
		_type?: 'slug' | string
	}
	body?: (postBodyBlock | postBodyImage)[]
	mainImage?: {
		hotspot?: {
			height?: number
			_type?: 'sanity.imageHotspot' | string
			width?: number
			x?: number
			y?: number
		}
		_type?: 'image' | string
		asset?: {
			_ref?: string
			_type?: 'reference' | string
		}
		crop?: {
			_type?: 'sanity.imageCrop' | string
			right?: number
			top?: number
			left?: number
			bottom?: number
		}
	}
	title?: string
	_updatedAt?: string
	author?: {
		_type?: 'reference' | string
		_ref?: string
	}
	categories?: [
		{
			_ref?: string
			_type?: 'reference' | string
			_key?: string
		},
	]
}

type postBodyImage = {
	_key?: string
	asset?: {
		_ref?: string
		_type?: 'reference' | string
	}
	_type?: 'image'
}

type postBodyBlock = {
	_key?: string
	markDefs?: any[]
	children?: [
		{
			marks?: string[]
			text?: string
			_key?: string
			_type?: 'span' | string
		},
	]
	_type?: 'block'
	style?: string
}
