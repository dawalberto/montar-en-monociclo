import { valuesOfImg } from '@/utils'
import NextImage from 'next/image'
import styles from './image.module.scss'

type ImageOptions = {
	source: any
	avatar?: boolean
	alt?: string
}
export const Image = ({ source, avatar, alt }: ImageOptions) => {
	const { src, width, height } = valuesOfImg(source)

	if (avatar) {
		return (
			<div className={styles['avatar-wrapper']}>
				<NextImage
					src={src}
					alt={alt ?? ''}
					sizes='100vw'
					width={0}
					height={0}
					className={styles.img}
					loading='lazy'
				/>
			</div>
		)
	}

	return (
		<NextImage
			src={src}
			alt={alt ?? ''}
			sizes='100vw'
			width={width ?? 0}
			height={height ?? 0}
			className={styles.img}
			loading='lazy'
		/>
	)
}
