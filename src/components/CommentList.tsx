// CommentList.tsx
import { Comment } from "../types";

interface CommentListProps {
	comments: Comment[];
}

function CommentList({ comments }: CommentListProps) {
	return (
		<div style={{ marginTop: "1rem" }}>
			{comments.map((comment) => (
				<div
					key={comment.id}
					style={{ marginBottom: "0.5rem" }}>
					<strong>{comment.name}</strong>
					<p>{comment.body}</p>
				</div>
			))}
		</div>
	);
}

export default CommentList;
