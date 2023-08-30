import UsersRow from '@/components/Dashboard/Users/UsersRow';
import React from 'react';

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
		<div className="container">
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead className="text-lg font-semibold bg-gray-400 text-gray-950 text-center">
						<tr>
							<th>*</th>
							<th className="w-3/12">Course</th>
							<th className="">Course Fee</th>
							<th>Transaction Details</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{paidClasses.map((paidClass, index) => (
							// <PaymentTableRow
							// 	key={paidClass._id}
							// 	paidClass={paidClass}
							// 	index={index}
							// ></PaymentTableRow>
							<UsersRow key={Users._id}></UsersRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
