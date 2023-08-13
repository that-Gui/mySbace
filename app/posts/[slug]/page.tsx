interface Post {
	title: string;
	content: string;
	slug: string;
}

interface PostProps {
	params: { slug: string };
}

export default async function Post({ params }: PostProps) {
	const postlist: Post[] = await fetch('http://localhost:3000/api/content', {
		cache: 'default',
	}).then((res) => res.json());

	const post = postlist.find((post) => post.slug === params.slug);

	return (
		<div>
			<h1>{post?.title}</h1>
			<p>{post?.content}</p>
		</div>
	);
}
