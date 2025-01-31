import { ReactNode } from 'react'

interface DrawerProps {
    children?: ReactNode
    title?: ReactNode
    bodyClass?: string
    closable?: boolean
    isOpen?: boolean
    showBackdrop?: boolean
    width?: number
    position?: 'left' | 'right' | 'top' | 'bottom'
    onClose?: () => void
    onRequestClose?: () => void
}

const Drawer = ({ children, bodyClass, title, closable, isOpen, showBackdrop, width, position, onClose, onRequestClose, ...rest }: DrawerProps) => {
    if (!isOpen) return null

    return (
        <>
            {showBackdrop && <div className="drawer-backdrop" onClick={onRequestClose} />}
            <div className={`drawer drawer-${position}`} style={{ width: width ? `${width}px` : undefined }} {...rest}>
                {title && (
                    <div className="drawer-header">
                        {title}
                        {closable && <button onClick={onClose}>×</button>}
                    </div>
                )}
                <div className={bodyClass}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Drawer 