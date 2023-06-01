import PocketBase from 'pocketbase';
import { type ArtistesResponse, type OeuvresResponse, Collections, } from './pocketbase-types';
export const pb = new PocketBase ('http://127.0.0.1:8090');

export async function allartistes() {
    const records = await pb.collection ("artistes").getFullList<ArtistesResponse>();
    return records;
}
export async function allOeuvres() {
    const records = await pb.collection ("oeuvres").getFullList();
    return records;
}

export async function ArtistesFrise(){
    const sortedRecords = await pb.collection('artistes').getFullList({
        sort: 'DateDeNaissance',
    });
    return sortedRecords;
}

export async function oneIDArtiste(id: string) {
    return await pb.collection(Collections.Artistes).getOne<ArtistesResponse>(id)
  }

export async function OeuvresFrise(){
    const sortedRecordsOeuvre = await pb.collection('oeuvres').getFullList({
        sort: 'Date',
    });
    return sortedRecordsOeuvre;
}



export async function oneIDOeuvre(id: string) {
    return await pb.collection(Collections.Oeuvres).getOne<OeuvresResponse>(id)
  }


