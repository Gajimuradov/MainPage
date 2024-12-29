// src/pages/PostsPage.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// MUI компоненты
import {
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Box,
} from "@mui/material";

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

function PostsPage() {
	const [posts, setPosts] = useState<Post[]>([]);
	const navigate = useNavigate(); // для перехода

	useEffect(() => {
		axios
			.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				setPosts(response.data);
			})
			.catch((err) => {
				console.error("Ошибка при получении постов:", err);
			});
	}, []);

	if (!posts.length) {
		return <div>Загрузка или нет постов...</div>;
	}

	return (
		<Container
			maxWidth='lg'
			sx={{ py: 4, backgroundColor: "#fcfcfc" }}>
			{/* Заголовок и подзаголовок */}
			<Typography
				variant='h3'
				gutterBottom>
				Главная страница
			</Typography>
			<Typography
				variant='subtitle1'
				gutterBottom>
				Список постов, нажмите на пост для детальной информации и просмотра комментариев
			</Typography>

			{/* Сетка с карточками */}
			<Box sx={{ mt: 4 }}>
				<Grid
					container
					spacing={3}>
					{posts.map((post) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={post.id}>
							<Card
								sx={{
									cursor: "pointer",
									height: "100%",
									backgroundColor: "#f5f6fa",
									border: "1px solid #e5e7ed",
									transition: "background-color 0.3s ease",
									"&:hover": {
										backgroundColor: "#fcfcfc",
									},
								}}
								onClick={() => navigate(`/posts/${post.id}`)}>
								{/* Случайная картинка для каждого поста */}
								<CardMedia
									component='img'
									height='140'
									image={`https://picsum.photos/600/300?random=${post.id}`}
									alt='Random'
								/>
								<CardContent>
									{/* Обрез заголовок и тело*/}
									<Typography
										variant='h6'
										gutterBottom>
										{post.title.slice(0, 20)}...
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'>
										{post.body.slice(0, 60)}...
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}

export default PostsPage;
