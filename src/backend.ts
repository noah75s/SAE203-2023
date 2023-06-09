
var pocketbase_ip=''
if(import.meta.env.MODE === 'production')
pocketbase_ip='https://kalinka203.noahripert.fr:443'
else
pocketbase_ip='http://127.0.0.1.8090'



import PocketBase from 'pocketbase';
import { type ArtistesResponse, type OeuvresResponse, Collections, } from './pocketbase-types';
export const pb = new PocketBase (pocketbase_ip);

export async function allartistes() {
    const records = await pb.collection ("artistes").getFullList<ArtistesResponse>();
    return records;
}
export async function allOeuvres() {
    const records = await pb.collection ("oeuvres").getFullList<OeuvresResponse>();
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


