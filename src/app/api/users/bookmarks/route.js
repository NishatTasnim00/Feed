import User from '@/models/User';
import connect from '@/utils/db';
import Post from '@/models/Post';

import { NextResponse } from 'next/server';

export const GET = async (request) => {
	try {
		const userEmail = request.nextUrl.searchParams.get('userEmail');
		await connect();
		console.log(userEmail);
		const user = await User.findOne({ email: userEmail });
		console.log(user)
		if (!user) {
			return new NextResponse(
				JSON.stringify({ message: 'User not found' }, { status: 404 })
			);
		}
		const bookmarkedPosts = await Post.find({ _id: { $in: user?.bookmarks } });
		console.log(bookmarkedPosts);
		return new NextResponse(JSON.stringify(bookmarkedPosts), { status: 200 });
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
};


export const PATCH = async (request) => {
	try {
		const userEmail = request.nextUrl.searchParams.get('userEmail');
		const postId = request.nextUrl.searchParams.get('postId');

		if (!userEmail || !postId) {
			return new NextResponse(
				JSON.stringify({ message: 'Invalid request' }, { status: 400 })
			);
		}

		await connect();
		const user = await User.findOne({ email: userEmail });
		if (!user) {
			return new NextResponse(
				JSON.stringify({ message: 'User not found' }, { status: 404 })
			);
		}

		const isAlreadyBookmarked = user.bookmarks.includes(postId);

		console.log(isAlreadyBookmarked);

		if (isAlreadyBookmarked) {
			return new NextResponse(
				JSON.stringify({ message: 'Post already saved' }, { status: 200 })
			);
		} else {
			user.bookmarks.push(postId);
			await user.save();

			return new NextResponse(
				JSON.stringify(
					{ message: 'Post bookmarked successfully' },
					{ status: 200 }
				)
			);
		}
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
};
