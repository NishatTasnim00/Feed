import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';
import TopBar from '@/components/Dashboard/Topbar/Topbar';
import React from 'react';

const dashBoardLayout = ({ children }) => {
	return (
		<>
			<div className="grid lg:grid-cols-12">
				<div className="grid col-span-2">
					<Sidebar></Sidebar>
				</div>
				<div className="grid col-span-10 ">
					<TopBar></TopBar>
				</div>

				<div className="grid col-span-10">{children}</div>
			</div>
		</>
	);
};

export default dashBoardLayout;
