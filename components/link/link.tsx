import Link from 'next/link'
import React from 'react'

export default function ActionLink({ href, className, children }: {  
        href: string,
        className?: string,
        children: React.ReactNode,
     
    }) {
    return (
        <Link
            href={href}
            className={`py-4 mt-2 bg-secondary-color text-white  rounded-md  w-full  flex gap-x-4 items-center  justify-center   px-12  tracking-[1px] ${className && className}`}>
            {children}
        </Link>
    )
}
