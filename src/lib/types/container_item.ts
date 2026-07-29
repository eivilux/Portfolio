import type { Component } from 'svelte';

export interface ContainerItemRaw {
	name: string;
	important: boolean;
	topbar: boolean;
	content: Component;
}

export interface ContainerItem {
	name: string;
	link: string;

	topbar: boolean;
	important: boolean;

	content: Component;
}

export interface ContainerItemView {
	name: string;
	link: string;
	content: Component;
}

export function toContainerItem(item: ContainerItemRaw): ContainerItem {
	return {
		name: item.name.toUpperCase(),
		link: item.name
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase(),
		topbar: item.topbar,
		important: item.important,
		content: item.content
	};
}

export function toContainerItemView(item: ContainerItem): ContainerItemView {
	return {
		name: item.name,
		link: item.link,
		content: item.content
	};
}
