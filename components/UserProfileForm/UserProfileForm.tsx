'use client';

export function UserProfileForm({ user }: any) {
	//
	const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const body = {
			name: formData.get('name'),
			bio: formData.get('bio'),
			image: formData.get('image'),
		};

		const res = await fetch('/api/user', {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		await res.json();
	};
	//

	return (
		<div>
			<h2>Edit Your Profile</h2>
			<form onSubmit={updateUser}>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' defaultValue={user?.name ?? ''} />
				<label htmlFor='bio'>Bio</label>
				<textarea
					name='bio'
					cols={30}
					rows={10}
					defaultValue={user?.bio ?? ''}
				></textarea>
				<label htmlFor='image'>Profile Image URL</label>
				<input type='text' name='image' defaultValue={user?.image ?? ''} />

				<button type='submit'>Save</button>
			</form>
		</div>
	);
}
