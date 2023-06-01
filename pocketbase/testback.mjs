import {allArtistes} from "./backend.mjs"
import {allOeuvres} from "./backend.mjs"
import { ArtistesFrise } from "./backend.mjs";
import { OeuvresFrise } from "./backend.mjs";
import { AllOeuvresArtistes } from "./backend.mjs"
import { IDOeuvresArtistes } from "./backend.mjs";

/* liste tout les artistes
try {
    const fulllist = await allArtistes();
    console.log(JSON.stringify(fulllist, null, 2))
} catch (e) {
    console.error(e);
}/

/ liste toute oeuvres
try {
    const fulllist = await allOeuvres();
    console.log(JSON.stringify(fulllist, null, 2))
} catch (e) {
    console.error(e);
}
/
/ Artiste par ordre chronologique
try {
    const sortedRecords = await ArtistesFrise ();
    console.log(JSON.stringify(sortedRecords, null, 2));
} catch (e) {
    console.error(e);
}/

/ Oeuvres par ordre chornologique
try {
    const sortedRecordsOeuvre = await OeuvresFrise ();
    console.log(JSON.stringify(sortedRecordsOeuvres, null, 2));
} catch (e) {
    console.error(e);}
    /

 / une fonction qui retourne la liste des œuvres d'un artiste donné
   try {
        const OeuvresArtistes = await AllOeuvresArtistes ("Andy Warhol ")
        console.log(JSON.stringify( OeuvresArtistes, null, 2));
    } catch (e) {
        console.error(e);}
    */

        try {
            const records = await IDOeuvresArtiste("nujfckkh59sp7d4")
            console.log(JSON.stringify( records, null, 2));
        } catch (e) {
            console.error(e);}
