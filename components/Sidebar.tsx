'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import MobileNav from './MobileNav'

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <MobileNav />
        </nav>
        Footer
    </section>
  )
}

export default Sidebar