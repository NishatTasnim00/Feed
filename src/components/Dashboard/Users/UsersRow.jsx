import React from 'react';

const UsersRow = ({ user, index }) => {
	console.log(user);

	const date1 = new Date(user.createdAt);
	// const options = { dateStyle: 'long', timeStyle: 'medium' };
	const options = { year: 'numeric', month: 'long', day: 'numeric' };

	const formattedDateTime = date1.toLocaleString(undefined, options);
	return (
		<>
			<tr className="text-base text-center">
				<th> {index + 1}</th>
				<td>{user.name}</td>
				<td>User</td>
				<td>{formattedDateTime}</td>
				<td>
					<button className="btn btn-sm bg-primary hover:bg-primary text-xs capitalize">Active</button>
				</td>
                <td>Edit</td>
			</tr>
		</>
	);
};

export default UsersRow;
