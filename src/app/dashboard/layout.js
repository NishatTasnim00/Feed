import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';
import TopBar from '@/components/Dashboard/Topbar/Topbar';
import React from 'react';

const dashBoardLayout = ({ children }) => {
	return (
		<>
			<div className="layout grid lg:grid-cols-12 z-50 ">
				<div className="grid col-span-1  mr-12 ">
					<Sidebar></Sidebar>
				</div>
				<div className="grid col-span-11 z-10 ">
					<TopBar></TopBar>
				</div>

				<div className="grid col-span-10">{children}</div>
			</div>
		</>
	);
};

export default dashBoardLayout;
