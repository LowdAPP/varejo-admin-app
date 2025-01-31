import Image from 'next/image'
import { useThemeStore, ThemeState } from '@/store/themeStore'
import { THEME_ENUM } from '@/constants/theme.constant'
import type { ImageProps } from 'next/image'

interface DoubleSidedImageProps extends Omit<ImageProps, 'src'> {
    src: string
    darkModeSrc: string
}

const { MODE_DARK } = THEME_ENUM

const DoubleSidedImage = ({
    src,
    darkModeSrc,
    alt = '',
    ...rest
}: DoubleSidedImageProps) => {
    const mode = useThemeStore((state: ThemeState) => state.mode)

    return (
        <Image 
            src={mode === MODE_DARK ? darkModeSrc : src} 
            alt={alt} 
            {...rest} 
        />
    )
}

export default DoubleSidedImage
