import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById, getCommentsByPostId } from "../services/api";
import { Post, Comment } from "../types";
import {
	Container,
	Typography,
	Card,
	CardContent,
	CardActions,
	Divider,
	Box,
	Button,
	Grid,
	Paper,
} from "@mui/material";

function PostDetailPage() {
	const { id } = useParams();
	const [post, setPost] = useState<Post | null>(null);
	const [comments, setComments] = useState<Comment[]>([]);

	useEffect(() => {
		if (!id) return;
		const postId = parseInt(id, 10);

		getPostById(postId).then(setPost);
		getCommentsByPostId(postId).then(setComments);
	}, [id]);

	if (!post) return <Typography>Загрузка...</Typography>;

	return (
		<Container
			maxWidth='md'
			sx={{ py: 4 }}>
			{/* Пост */}
			<Card
				sx={{ backgroundColor: "#f5f6fa", border: "1px solid #e5e7ed", mb: 4 }}>
				<CardContent>
					<Typography
						variant='h4'
						gutterBottom>
						{post.title}
					</Typography>
					<Typography
						variant='body1'
						sx={{ mb: 2 }}>
						{post.body}
					</Typography>
					<Divider sx={{ my: 2 }} />
				</CardContent>
				<CardActions>
					<Button
						variant='outlined'
						color='primary'
						onClick={() => window.history.back()}>
						Назад
					</Button>
				</CardActions>
			</Card>

			{/* Комментарии */}
			<Box>
				<Typography
					variant='h5'
					gutterBottom>
					Комментарии
				</Typography>
				<Divider sx={{ mb: 2 }} />
				<Grid
					container
					spacing={2}>
					{comments.map((comment) => (
						<Grid
							item
							xs={12}
							sm={6}
							key={comment.id}>
							<Paper
								elevation={1}
								sx={{
									p: 2,
									backgroundColor: "#fcfcfc",
									border: "1px solid #e0e0e0",
									borderRadius: "8px",
								}}>
								<Typography
									variant='subtitle1'
									sx={{ fontWeight: "bold" }}>
									{comment.name}
								</Typography>
								<Typography
									variant='body2'
									sx={{ color: "text.secondary" }}>
									{comment.email}
								</Typography>
								<Typography
									variant='body1'
									sx={{ mt: 1 }}>
									{comment.body}
								</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}

export default PostDetailPage;
