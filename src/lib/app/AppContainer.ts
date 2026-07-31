import {
	type ContainerItemRaw,
	type ContainerItem,
	type ContainerItemView,
	toContainerItem,
	toContainerItemView
} from '$lib/types/container_item';
import Conferences from '$lib/components/sections/Conferences.svelte';
import Portfolio from '$lib/components/sections/Portfolio.svelte';
import Testimonials from '$lib/components/sections/Testimonials.svelte';
import Contact from '$lib/components/sections/Contact.svelte';
import Vision from '$lib/components/sections/Vision.svelte';
import Expertises from '$lib/components/sections/Expertises.svelte';
import Podcasts from '$lib/components/sections/Podcasts.svelte';

class AppContainer {
	inner: ContainerItem[] = [];

	constructor() {
		const raw_inner: ContainerItemRaw[] = [
			{
				name: 'Portfolio',
				important: false,
				topbar: false,
				content: Portfolio
			},
			{
				name: 'Vision',
				important: false,
				topbar: true,
				content: Vision
			},
			{
				name: 'Expertises',
				important: false,
				topbar: true,
				content: Expertises
			},
			{
				name: 'Conférences',
				important: false,
				topbar: true,
				content: Conferences
			},
			{
				name: 'Témoignages',
				important: false,
				topbar: false,
				content: Testimonials
			},
			{
				name: 'Podcast',
				important: false,
				topbar: true,
				content: Podcasts
			},
			{
				name: 'Contact',
				important: true,
				topbar: true,
				content: Contact
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

	topbar_items(): ContainerItemView[] {
		return this.inner.filter((item) => item.topbar).map(toContainerItemView);
	}
}

export const app_container = new AppContainer();
