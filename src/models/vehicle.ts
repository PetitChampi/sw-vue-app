export interface Vehicle {
	name: string,
	model: string,
	manufacturer: string,
	cost_in_credits: number | string,
	length: number,
	max_atmosphering_speed: string | number,
	crew: number,
	passengers: number,
	cargo_capacity: number,
	consumables: string,
	hyperdrive_rating: number,
	MGLT: number,
	starship_class: string,
	pilots: string[],
	films: string[],
	created: Date,
	edited: Date,
	url: string
}