"use client"
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'


export default function Button({className, children, onclick }: {   
        className?: string,
        children: React.ReactNode,
        onclick?: MouseEventHandler<HTMLButtonElement>
    }) {
        return (
    
                <button onClick={onclick}                    
                    className={`py-4 mt-3  rounded-md  w-full text-secondary-color font-bold ${className && className}`}>
                    {children}
                </button>             
        )
    }

        
