import {
	type ContainerItemRaw,
	type ContainerItem,
	type ContainerItemView,
	toContainerItem,
	toContainerItemView
} from '$lib/types/container_item';
import MockItem from '$lib/components/sections/MockItem.svelte';
import Vision from '$lib/components/sections/Vision.svelte';

//TODO: Add portofilio, but not display it in the topbar
class AppContainer {
	inner: ContainerItem[] = [];

	constructor() {
		const raw_inner: ContainerItemRaw[] = [
			{
				name: 'Vision',
				important: false,
				content: Vision
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

		this.inner = raw_inner.map(toContainerItem);
	}

	importants(): ContainerItemView[] {
		return this.inner.filter((item) => item.important).map(toContainerItemView);
	}

	items(): ContainerItemView[] {
		return this.inner.map(toContainerItem);
	}
}

export const app_container = new AppContainer();
