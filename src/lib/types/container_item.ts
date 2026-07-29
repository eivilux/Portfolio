import type { Component } from 'svelte';

export interface ContainerItemRaw {
	name: string;
	important: boolean;
	content: Component;
}

export interface ContainerItem {
	name: string;
	link: string;

	important: boolean;

	content: Component;
}

export interface ContainerItemView {
	name: string;
	link: string;
	content: Component;
}
