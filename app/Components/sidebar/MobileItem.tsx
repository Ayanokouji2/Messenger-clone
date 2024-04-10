'use client'

import clsx from 'clsx'
import Link from 'next/link'

interface MobileItemProps {
    label: string
    href: string
    icon: any
    active?: Boolean
    onClick?: () => void
}

const MobileItem: React.FC<MobileItemProps> = ({
    label,
    icon: Icon,
    href,
    active,
    onClick,
}) => {
    const handleClick = () => {
        if (onClick) return onClick()
    }
    return (
        <Link
            href={href}
            onClick={handleClick}
            className={clsx(`group flex gap-x-3 text-sm leading-6 w-full font-semibold justify-center p-4 text-gray-500
                 hover:bg-gray-100 hover:text-black`, active && 'text-black bg-gray-100')}
            >
            <Icon className="h-6 w-6" />

        </Link>
    )
}

export default MobileItem
