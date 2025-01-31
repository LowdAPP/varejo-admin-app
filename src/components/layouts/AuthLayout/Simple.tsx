import { cloneElement, isValidElement } from 'react'
import Container from '@/components/shared/Container'
import type { ReactNode, ReactElement } from 'react'
import type { CommonProps } from '@/@types/common'

interface ChildProps {
    contentClassName?: string
}

interface SimpleProps extends CommonProps {
    content?: ReactNode
    children?: ReactNode
}

const Simple = ({ children, content, ...rest }: SimpleProps) => {
    return (
        <div className="h-full bg-white dark:bg-gray-800">
            <Container className="flex flex-col flex-auto items-center justify-center min-w-0 h-full">
                <div className="min-w-[320px] md:min-w-[400px] max-w-[400px]">
                    <div>
                        {content}
                        {children && isValidElement(children) ? cloneElement(children as ReactElement<ChildProps>, {
                            contentClassName: 'text-center',
                            ...rest,
                        }) : children}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Simple
