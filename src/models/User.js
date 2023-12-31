import mongoose from 'mongoose';

const { Schema } = mongoose;

let User;

try {
	// Try to get the existing model if it exists
	User = mongoose.model('User');
} catch {
	// If the model doesn't exist, define it
	const userSchema = new Schema(
		{
			name: {
				type: String,
				unique: true,
				required: true,
			},
			email: {
				type: String,
				unique: true,
				required: true,
			},
			bio: {
				type: String,
			},
			followers: {
				type: Number,
			},
			following: {
				type: Number,
			},
			posts: {
				type: Number,
			},
			profile_picture: {
				type: String,
			},
		},
		{
			timestamps: true,
		}
	);

	User = mongoose.model('User', userSchema);
}

export default User;
