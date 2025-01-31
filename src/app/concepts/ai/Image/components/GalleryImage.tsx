import type { GelleryItem } from '../type'
import Image from 'next/image'

type GalleryImageProps = {
    galleryItem: GelleryItem
    onImageClick: (galleryItem: GelleryItem) => void
}

const GalleryImage = (props: GalleryImageProps) => {
    const { galleryItem, onImageClick } = props

    return (
        <div
            key={galleryItem.id}
            className="rounded-lg cursor-pointer relative group"
            onClick={() => onImageClick(galleryItem)}
        >
            <Image
                width={400}
                height={250}
                className="rounded-xl w-full"
                src={galleryItem.image}
                alt="Gallery image"
            />
        </div>
    )
}

export default GalleryImage
