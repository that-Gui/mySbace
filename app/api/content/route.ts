import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { title } from 'process';

// dummy data
const posts = [
	{
		title: 'Lorem Ipsum',
		slug: 'lorem-ipsum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
	},
	{
		title: 'Exploring Ancient Civilizations',
		slug: 'exploring-ancient-civilizations',
		content:
			'Journey through time to uncover the mysteries of ancient civilizations. Discover lost cities, intricate artifacts, and the stories of our ancestors.',
	},
	{
		title: 'The Art of Culinary Masterpieces',
		slug: 'art-of-culinary-masterpieces',
		content:
			'Embark on a culinary adventure that celebrates the artistry of cooking. From delicate pastries to savory delights, experience the magic of flavors coming together.',
	},
	{
		title: 'Captivating Landscapes: A Photographic Journey',
		slug: 'captivating-landscapes-photographic-journey',
		content:
			'Immerse yourself in the breathtaking beauty of nature through the lens of talented photographers. Explore diverse landscapes that inspire wonder and awe.',
	},
	{
		title: 'Innovations in Sustainable Technology',
		slug: 'innovations-in-sustainable-technology',
		content:
			'Discover groundbreaking technologies that are shaping a greener future. Learn about innovations in renewable energy, eco-friendly transportation, and more.',
	},
	{
		title: 'Unveiling the Wonders of Astronomy',
		slug: 'unveiling-wonders-of-astronomy',
		content:
			'Embark on a cosmic journey to unravel the mysteries of the universe. From distant galaxies to celestial phenomena, explore the beauty and science of space.',
	},
	{
		title: 'Hidden Gems of Art History',
		slug: 'hidden-gems-of-art-history',
		content:
			'Delve into the lesser-known masterpieces of art history. Uncover hidden gems that have shaped artistic movements and left an indelible mark on culture.',
	},
	{
		title: 'The Power of Mindfulness Meditation',
		slug: 'power-of-mindfulness-meditation',
		content:
			'Explore the transformative practice of mindfulness meditation. Learn techniques to cultivate presence, reduce stress, and enhance overall well-being.',
	},
	{
		title: 'Eco-Friendly Gardening for a Greener Tomorrow',
		slug: 'eco-friendly-gardening-for-greener-tomorrow',
		content:
			'Dive into the world of eco-friendly gardening and sustainable horticulture. Discover how to create thriving gardens while respecting and preserving the environment.',
	},
];

export async function GET() {
	/* const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json('Unauthorized', { status: 401 });
	} */
	return NextResponse.json(posts);
}

export async function POST(req: Request) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json('Unauthorized', { status: 401 });
	}

	const data = await req.json();

	const newPost = await prisma.post.create({ data: data });

	return NextResponse.json(newPost);
}

export async function PUT(req: Request) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json('Unauthorized', { status: 401 });
	}

	const data = await req.json();

	const updatedPost = await prisma.post.update({
		where: {
			id: data.id,
		},
		data: data,
	});

	return NextResponse.json(updatedPost);
}
