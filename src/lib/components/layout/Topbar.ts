import type { NavigationItem } from '$lib/types/navigation';

export function getNavigationItems(): NavigationItem[] {
	return [
		{
			id: 'vision',
			title: 'Vision'
		},
		{
			id: 'expertises',
			title: 'Expertises'
		},
		{
			id: 'conferences',
			title: 'Conférences'
		},
		{
			id: 'podcast',
			title: 'Podcast'
		},
		{
			id: 'contact',
			title: 'Contact'
		}
	];
}

export function getCollapsedNavigationItems(): NavigationItem[] {
	return [
		{
			id: 'contact',
			title: 'Contact'
		}
	];
}
