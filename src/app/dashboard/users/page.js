'use client';
import UserRow from '@/components/Dashboard/Users/UserRow';
import React from 'react';
import useSWR from 'swr';

const Users = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error, isLoading } = useSWR('/api/users', fetcher);
	// console.log(users);

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;
	return (
		<div className="w-10/12 mb-60 ml-auto mr-28 glass px-7 pt-8 mt-20 rounded-2xl z-0">
			<div className="border mb-6 w-3/12 text-2xl z-0	 p-2 rounded-md ">
				<h1 className="">Total User: {data?.length}</h1>
			</div>

			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead className="rounded-md text-base font-semibold bg-gray-400 text-gray-950 text-center">
						<tr className="">
							<th>*</th>
							<th className="w-3/12">User</th>
							<th className="">Role</th>
							<th className="">Joined</th>
							<th className="">Status</th>
							<th className="">Edit</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{data &&
							data?.map((user, index) => (
								<UserRow key={user._id} user={user} index={index}></UserRow>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
