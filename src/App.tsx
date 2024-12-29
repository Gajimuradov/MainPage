import { Routes, Route, Link } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";
import { Breadcrumbs } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function BreadcrumbsNav() {
	return (
		<Breadcrumbs
			aria-label='breadcrumb'
			style={{ color: "#fff" }}>
			<Link
				to='/'
				style={{
					display: "flex",
					alignItems: "center",
					textDecoration: "none",
					color: "#fff",
				}}>
				<HomeIcon
					fontSize='small'
					style={{ marginRight: "0.5rem" }}
				/>
				Главная
			</Link>
		</Breadcrumbs>
	);
}

function App() {
	return (
		<div style={{ backgroundColor: "#fcfcfc", minHeight: "100vh" }}>
			{/* Фиксированный хэдер */}
			<nav
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					zIndex: 1000,
					backgroundColor: "#1976d2",
					color: "#fff",
					padding: "1rem",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
				}}>
				<BreadcrumbsNav />
			</nav>

			
			<div style={{ paddingTop: "4rem" }}>
				<Routes>
					<Route
						path='/'
						element={<PostsPage />}
					/>
					<Route
						path='/posts/:id'
						element={<PostDetailPage />}
					/>
					<Route
						path='*'
						element={<div>Страница не найдена</div>}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
