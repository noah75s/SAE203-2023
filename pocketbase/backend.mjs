import PocketBase from 'pocketbase';
const pb = new PocketBase ('http://127.0.0.1:8090');

export async function allArtistes() {
    const records = await pb.collection ("artistes").getFullList();
    return records;
}
export async function allOeuvres() {
    const records = await pb.collection ("oeuvres").getFullList();
    return records;
}

export async function ArtistesFrise()
{
    const sortedRecords = await pb.collection('artistes').getFullList({
        sort: 'DateDeNaissance',
    });
    return sortedRecords;
}

export async function OeuvresFrise()
{
    const sortedRecordsOeuvre = await pb.collection('oeuvres').getFullList({
        sort: 'Date',
    });
    return sortedRecordsOeuvre;
}

export async function AllOeuvresArtistes(Nom)
{const oeuvresartiste = await pb.collection('artistes').getFullList({
    filter: Nom = "${Nom}",
    expand: 'oeuvres',
});
return oeuvresArtiste}

export async function IDOeuvresArtistes(id) {
return await pb.collection('artistes').getOne(id, {
    expand: 'oeuvres',

});}