import React from 'react'
import Link from 'next/link';

interface FloatingButtonProps {
    href: string,
    children: React.ReactNode
}
export default function FloatingButton(
    {href, children}: FloatingButtonProps) {
  return (
    <Link href={href}
        className='fixed flex items-center justify-center text-white font-abel
                    trasition-colors bg-custom-blue-2 border-0 border-transparent
                    rounded-full shadow-lg cursor-pointer hover:bg-custom-blue
                    aspect-squre top-24 right-8 w-14 h-14'   
    >
        {children}
    </Link>
  )
}
