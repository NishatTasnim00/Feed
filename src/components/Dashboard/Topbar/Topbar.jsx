import React from 'react';
import Image from 'next/image';
import { BsBell, } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineShareAlt } from 'react-icons/ai';

const TopBar = () => {
	return (
		<>
			<div className="h-20 bg-slate-400 px-16 flex justify-end items-center ">
				<div className="flex justify-end items-center gap-4">
					<AiOutlineShareAlt
						size={28}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<AiOutlinePlusCircle
						size={28}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<BsBell
						size={28}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<Image
						src="https://i.ibb.co/wz4Knkr/326458237-1340401556808776-5697246596607663538-n.jpg"
						width={40}
						height={40}
						alt="Posted Image"
						className="object-contain border rounded-full"
					/>
				</div>
			</div>
		</>
	);
};

export default TopBar;
