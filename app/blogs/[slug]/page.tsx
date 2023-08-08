interface Blog {
	title: string;
	content: string;
	slug: string;
}

interface BlogProps {
	params: { slug: string };
}

export default async function Blog({ params }: BlogProps) {
	const blogList: Blog[] = await fetch('http://localhost:3000/api/content', {
		cache: 'default',
	}).then((res) => res.json());

	const blog = blogList.find((blog) => blog.slug === params.slug);

	return (
		<div>
			<h1>{blog?.title}</h1>
			<p>{blog?.content}</p>
		</div>
	);
}
