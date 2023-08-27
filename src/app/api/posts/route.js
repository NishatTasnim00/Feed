import Post from '@/models/Post';
import connect from '@/utils/db';
import mongoose from 'mongoose';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		await connect();
		const posts = await Post.find();

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};

export async function PATCH(request) {
	try {
		const { id, comment, reaction } = await request.json();

		console.log(id)

		console.log(reaction)

		await connect();

		const objectId = new mongoose.Types.ObjectId(id);
		const filter = { _id: objectId };

		let updatedPost;

		if (comment) {
			updatedPost = await Post.findByIdAndUpdate(
				filter,
				{
					$push: {
						comments: {
							author: {
								email: 'tasnim@gmail.com',
								name: 'Nishat',
								profile_picture:
									'https://i.ibb.co/wz4Knkr/326458237-1340401556808776-5697246596607663538-n.jpg',
							},
							comment,
						},
					},
				},
				{
					new: true,
				}
			);
		} else if (reaction) {
			updatedPost = await Post.findByIdAndUpdate(
				filter,
				{
					$push: {
						reactions: {
							author: {
								email: 'tasnim@gmail.com',
								name: 'Nishat',
								profile_picture:
									'https://i.ibb.co/wz4Knkr/326458237-1340401556808776-5697246596607663538-n.jpg',
							},
							reaction
						},
					},
				},
				{
					new: true,
				}
			);
		} else {
			return new NextResponse.json(
				{ message: 'Invalid request' },
				{ status: 400 }
			);
		}

		if (!updatedPost) {
			revalidateTag(Post);
			return new NextResponse(
				JSON.stringify({ message: 'Post not found' }, { status: 404 })
			);
		}

		return new NextResponse(
			JSON.stringify(
				{ message: 'Operation successful', updatedPost },
				{ status: 200 }
			)
		);
	} catch (error) {
		console.error(error);
		return new NextResponse(
			JSON.stringify({ message: 'Internal server error' }, { status: 500 })
		);
	}
}














// export const PATCH = async(request) => {
// 	try {
// 		const { id, comment, reaction } = await request.json();
// 		await connect();

// 		let updatedPost;

// 		if (comment) {
// 			updatedPost = await Post.findByIdAndUpdate(
// 				id,
// 				{
// 					$push: {
// 						comments: {
// 							author: {
// 								email: 'tasnim@gmail.com',
// 								name: 'Nishat',
// 								profile_picture:
// 									'https://i.ibb.co/wz4Knkr/326458237-1340401556808776-5697246596607663538-n.jpg',
// 							},
// 							comment,
// 						},
// 					},
// 				},
// 				{
// 					new: true,
// 				}
// 			);
// 		} else if (reaction) {
// 			updatedPost = await Post.findByIdAndUpdate(
// 				id,
// 				{
// 					$push: {
// 						reactions: {
// 							author: {
// 								email: 'tasnim@gmail.com',
// 								name: 'Nishat',
// 								profile_picture:
// 									'https://i.ibb.co/wz4Knkr/326458237-1340401556808776-5697246596607663538-n.jpg',
// 							},
// 						},
// 					},
// 				},
// 				{
// 					new: true,
// 				}
// 			);
// 		} else {
// 			return new NextResponse.json(
// 				{ message: 'Invalid request' },
// 				{ status: 400 }
// 			);
// 		}

// 		if (!updatedPost) {
// 			revalidateTag(Post);
// 			return new NextResponse(
// 				JSON.stringify({ message: 'Post not found' }, { status: 404 })
// 			);
// 		}

// 		return new NextResponse(
// 			JSON.stringify(
// 				{ message: 'Operation successful', updatedPost },
// 				{ status: 200 }
// 			)
// 		);
// 	} catch (error) {
// 		console.error(error);
// 		return new NextResponse(
// 			JSON.stringify({ message: 'Internal server error' }, { status: 500 })
// 		);
// 	}
// }