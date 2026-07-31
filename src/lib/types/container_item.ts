import type { Component } from 'svelte';

export interface ContainerItemRaw {
	name: string;

	numbered: boolean;
	important: boolean;
	topbar: boolean;

	content: Component;
}

export interface ContainerItem {
	name: string;
	link: string;

	numbered: boolean;
	topbar: boolean;
	important: boolean;

	content: Component;
}

export interface ContainerItemView {
	name: string;
	link: string;

	numbered: boolean;
	content: Component;
}

export function toContainerItem(item: ContainerItemRaw): ContainerItem {
	return {
		name: item.name.toUpperCase(),
		link: item.name
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase(),
		numbered: item.numbered,
		topbar: item.topbar,
		important: item.important,
		content: item.content
	};
}

export function toContainerItemView(item: ContainerItem): ContainerItemView {
	return {
		name: item.name,
		link: item.link,
		numbered: item.numbered,
		content: item.content
	};
}
