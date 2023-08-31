'use client';
import UsersRow from '@/components/Dashboard/users/UsersRow';
import React from 'react';
import useSWR from 'swr';

const Users = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: users,
		error,
		isLoading,
	} = useSWR('/api/users', fetcher, {
		refreshInterval: 1000,
	});
	console.log(users);

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;
	return (
		<div className="w-10/12 glass px-7 pt-8 rounded-2xl z-0">
			<div className="border  w-3/12 text-2xl z-0	 p-2 rounded-md mb-5">
				<h1 className="">Total User: {users?.length}</h1>
			</div>

			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead className="text-base font-semibold bg-gray-400 text-gray-950 text-center">
						<tr>
							<th>*</th>
							<th className="w-3/12">User</th>
							<th className="">Role</th>
							<th>Joined</th>
							<th>Status</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{users &&
							users?.map((user, index) => (
								<UsersRow key={user._id} user={user} index={index}></UsersRow>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
