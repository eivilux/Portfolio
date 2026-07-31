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
import Stats from '$lib/components/sections/Stats.svelte';

class AppContainer {
	inner: ContainerItem[] = [];

	constructor() {
		const raw_inner: ContainerItemRaw[] = [
			{
				name: 'Portfolio',
				numbered: true,
				important: false,
				topbar: false,
				content: Portfolio
			},
			{
				name: 'Vision',
				numbered: true,
				important: false,
				topbar: true,
				content: Vision
			},
			{
				name: 'Stats',
				numbered: false,
				important: false,
				topbar: false,
				content: Stats
			},
			{
				name: 'Expertises',
				numbered: true,
				important: false,
				topbar: true,
				content: Expertises
			},
			{
				name: 'Conférences',
				numbered: true,
				important: false,
				topbar: true,
				content: Conferences
			},
			{
				name: 'Témoignages',
				numbered: true,
				important: false,
				topbar: false,
				content: Testimonials
			},
			{
				name: 'Podcast',
				numbered: true,
				important: false,
				topbar: true,
				content: Podcasts
			},
			{
				name: 'Contact',
				numbered: true,
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
		return this.inner.map(toContainerItemView);
	}

	topbar_items(): ContainerItemView[] {
		return this.inner.filter((item) => item.topbar).map(toContainerItemView);
	}
}

export const app_container = new AppContainer();
