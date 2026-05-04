"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (

        <Link href="/">
            <Image
                src="/freshcart-logo.svg"
                alt="logo"
                width={200}
                height={200}
                loading="eager"
                className="h-6 lg:h-8 w-auto"
            />
        </Link>
    )
}