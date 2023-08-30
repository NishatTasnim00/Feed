import Post from '@/models/Post';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async ({ params }) => {
	try {
        console.log(params)
		const { id } = params;
        console.log(id)
		await connect();
		const posts = await Post.findOne({ _id: id });

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};


