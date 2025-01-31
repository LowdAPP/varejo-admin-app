import { ReactNode, forwardRef } from 'react'
import classNames from 'classnames'

interface ScrollBarProps {
    children?: ReactNode
    className?: string
    autoHide?: boolean
}

export type ScrollBarRef = HTMLDivElement

const ScrollBar = forwardRef<ScrollBarRef, ScrollBarProps>(({ children, className, autoHide }, ref) => {
    return (
        <div ref={ref} className={classNames(className, autoHide && 'scrollbar-hide')}>
            {children}
        </div>
    )
})

ScrollBar.displayName = 'ScrollBar'

export default ScrollBar 