'use client';
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from 'next/navigation'

const CustomLink = ({href, title, className = "", target="_self"}) => {
    const pathname = usePathname()
    return (
        <Link href={href} target={`${target}`}className={`${className} relative group text-white`}>
            {title}
            <span className={`${pathname=== href? 'w-full' : 'w-0'} h-[1px] inline-block bg-white absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-200`}>&nbsp;</span>
        </Link>
    )
}


const NavBar = () => {
    return (
        <header className="w-full px-20 py-5   bg-black font-medium flex items-center justify-between">
            <nav >
                <CustomLink href="/" title="Home" className="mr-4"/>
                <CustomLink href="/about"  title="About" className="mx-4"/>
                <CustomLink href="/projects"  title="Projects" className="mx-4"/>
                <CustomLink href="/articles"  title="Articles" className="ml-4"/>
            </nav>
            <Logo></Logo>
            <nav  >
                <CustomLink target="_blank"href="https://linkedin.com/in/thangle1 " title="LinkedIn" className="mr-4"/>
                <CustomLink target="_blank"href="https://github.com/Thangle8501340 " title="Github" className="mx-4"/>
                <CustomLink target="_blank"href="https://www.linkedin.com/in/thangle1/details/featured/1725177977496/single-media-viewer/?profileId=ACoAACtARZkBrNOSMlbUc9CaAEdTePUKyzpY8a8" title="Resume" className="mx-4"/>
            </nav>
        </header>
    )
}

export default NavBar