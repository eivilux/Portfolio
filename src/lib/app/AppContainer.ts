import type { ContainerItemRaw, ContainerItem, ContainerItemView } from '$lib/types/container_item';
import MockItem from '$lib/components/layout/MockItem.svelte';

class AppContainer {
	inner: ContainerItem[] = [];

	constructor() {
		const raw_inner: ContainerItemRaw[] = [
			{
				name: 'Vision',
				important: false,
				content: MockItem
			},
			{
				name: 'Expertises',
				important: false,
				content: MockItem
			},
			{
				name: 'Conférences',
				important: false,
				content: MockItem
			},
			{
				name: 'Podcast',
				important: false,
				content: MockItem
			},
			{
				name: 'Contact',
				important: true,
				content: MockItem
			}
		];

		const inner: ContainerItem[] = raw_inner.map((item) => ({
			name: item.name.toUpperCase(),
			link: item.name
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
				.toLowerCase(),
			important: item.important,
			content: item.content
		}));

		this.inner = inner;
	}

	importants(): ContainerItemView[] {
		return this.inner
			.filter((item) => item.important)
			.map((item) => ({
				name: item.name,
				link: item.link,
				content: item.content
			}));
	}

	items(): ContainerItemView[] {
		return this.inner.map((item) => ({
			name: item.name,
			link: item.link,
			content: item.content
		}));
	}
}

export const app_container = new AppContainer();
