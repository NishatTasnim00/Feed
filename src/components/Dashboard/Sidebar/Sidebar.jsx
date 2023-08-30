import Link from 'next/link';
import React from 'react'
const Items = [
	{
		path: '/dashboard',
		title: 'Dashboard',
	},
	{
		path: '/dashboard/users',
		title: 'Users',
	},

	{
		path: '/dashboard/activities',
		title: 'Activities',
	},

	{
		path: '/dashboard',
		title: 'Dashboard',
	},
];
const Sidebar = () => {
  return (
		<>
			<div className='min-h-screen bg-slate-400'

            >
                <h1>sidebar</h1>
                <ul>{
                    Items?.map(( {path, title} )=>(
                        <li key={path}>
                            <Link href={path}

                            >{title}</Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
		</>
	);
}

export default Sidebar;