import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

export async function GET(request: Request) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json('Unauthorized', { status: 401 });
	}
	const users = await prisma.user.findMany();
	console.log(users);

	return NextResponse.json(users);
}
