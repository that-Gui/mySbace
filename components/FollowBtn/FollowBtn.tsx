'use client';

import * as React from 'react';
import { useSession } from 'next-auth/react';
import { prisma } from '@/lib/prisma';
import { useRouter } from 'next/navigation';

export default function FollowBtn() {
	const { data: session, status } = useSession();

	if (status === 'unauthenticated') {
		return <p>You must be signed in...</p>;
	}

	const currentUserId = prisma.user
		.findFirst({ where: { email: session?.user?.email! } })
		.then((user) => user?.id!);

	const isFollowing = prisma.follows.findFirst({
		where: { followerId: currentUserId, followingId: targetUserId },
	});
	const router = useRouter();
	const [isPending, startTransition] = React.useTransition();
	const [isFetching, setIsFetching] = React.useState(false);
	const isMutating = isFetching || isPending;

	const follow = async () => {
		setIsFetching(true);

		const res = await fetch('/api/follow', {
			method: 'POST',
			body: JSON.stringify({ targetUserId }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		setIsFetching(false);

		console.log(res);

		startTransition(() => {
			// Refresh the current route:
			// - Makes a new request to the server for the route
			// - Re-fetches data requests and re-renders Server Components
			// - Sends the updated React Server Component payload to the client
			// - The client merges the payload without losing unaffected
			//   client-side React state or browser state
			router.refresh();
		});
	};

	const unfollow = async () => {
		setIsFetching(true);

		const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
			method: 'DELETE',
		});

		setIsFetching(false);
		startTransition(() => router.refresh());
	};

	if (isFollowing) {
		return (
			<button onClick={unfollow}>{!isMutating ? 'Unfollow' : '...'}</button>
		);
	} else {
		return <button onClick={follow}>{!isMutating ? 'Follow' : '...'}</button>;
	}
}
