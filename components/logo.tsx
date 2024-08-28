import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {cn} from '@/lib/utils';

export const Logo = () => {
	return (
		<Link href={'/'}>
			<div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
				<Image src={"/logo.svg"} width={30} height={30} alt={"logo for application"}/>
				<p className={cn("text-lg text-neutral-700 pb-1")}>Atsatra Infosystem</p>
			</div>
		</Link>
	);
};

