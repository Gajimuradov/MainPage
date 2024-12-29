// PostCard.tsx
import { Post } from "../types";

interface PostCardProps {
	post: Post;
	onClick?: () => void;
}

function PostCard({ post, onClick }: PostCardProps) {
	return (
		<div
			onClick={onClick}
			style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	);
}

export default PostCard;
