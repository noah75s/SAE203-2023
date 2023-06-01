/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Artistes = "Artistes",
	Oeuvres = "Oeuvres",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ArtistesRecord = {
	nom?: string
	date_de_naissance?: string
	img?: string
	Biographie?: string
	nationalite?: string
}

export type OeuvresRecord = {
	nom?: string
	artiste?: string
	img?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArtistesResponse = Required<ArtistesRecord> & BaseSystemFields
export type OeuvresResponse = Required<OeuvresRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Artistes: ArtistesRecord
	Oeuvres: OeuvresRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Artistes: ArtistesResponse
	Oeuvres: OeuvresResponse
	users: UsersResponse
}