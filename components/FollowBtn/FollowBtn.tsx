import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import ClientSideFollowBtn from './ClientSideFollowBtn';

interface Props {
	targetUserId: string;
}

export default async function FollowBtn({ targetUserId }: Props) {
	const session = await getServerSession(authOptions);

	const currentUserId = await prisma.user
		.findFirst({ where: { email: session?.user?.email! } })
		.then((user) => user?.id!);

	const isFollowing = await prisma.follows.findFirst({
		where: { followerId: currentUserId, followingId: targetUserId },
	});

	return (
		<ClientSideFollowBtn
			targetUserId={targetUserId}
			isFollowing={!!isFollowing}
		/>
	);
}
