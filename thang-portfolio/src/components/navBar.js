'use client';

import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from 'next/navigation';

const CustomLink = ({ href, title, className = "", target = "_self" }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} target={target} className={`${className} relative group text-white`}>
            {title}
            <span
                className={`${isActive ? 'w-full' : 'w-0'} h-[1px] inline-block bg-white absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-200`}
            />
        </Link>
    );
};

const NavBar = () => {
    return (
        <header className="w-full px-20 py-5 bg-black font-medium flex items-center justify-between sticky top-0 z-50">
            <nav className="flex space-x-4">
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/projects" title="Projects" />
                <CustomLink href="/articles" title="Articles" />
            </nav>
            <Logo />
            <nav className="flex space-x-4">
                <CustomLink target="_blank" href="https://linkedin.com/in/thangle1" title="LinkedIn" />
                <CustomLink target="_blank" href="https://github.com/Thangle8501340" title="Github" />
                <CustomLink target="_blank" href="" title="Resume" />
            </nav>
        </header>
    );
};

export default NavBar;
