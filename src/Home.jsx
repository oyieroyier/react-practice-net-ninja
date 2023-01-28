import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Button from "./components/Button";
import Login from "./components/Login";

const Home = () => {
	// const [name, setName] = useState("CLICK THE BUTTON");

	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	/* const [person, setPerson] = useState("Macarena");
	function changeName() {
		setName("I AM HERE BECAUSE STATE HAS CHANGED 😉!");
	} */

	/* function handleDelete(id) {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	} */

	useEffect(() => {
		fetch("https://react-prac-ashen.vercel.app/blogs")
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
				setBlogs(data);
				setIsLoading(false);
			});
	}, []);
	return (
		<div id="home">
			<div className="header">
				<h1 className="h1">Programming Blog</h1>
				<Login />
				<Button />
			</div>

			{/* <h2>{name}</h2>
			<button className="click-me" onClick={changeName}>
				{"CLICK ME"}
			</button> */}

			<div className="blogs">
				{isLoading && <div>Loading...</div>}
				{blogs && <BlogList blogs={blogs} title="All Blogs" />}
				{/* <button
					className="click-me"
					onClick={() => {
						setPerson("Eeeeeeh");
					}}
				>
					CHANGE NAME
				</button>
				<p>{person}</p> */}
			</div>
		</div>
	);
};
export default Home;