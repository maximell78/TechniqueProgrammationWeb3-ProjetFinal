export interface Forfaits {
    id: string;
    region: string;
    destination: string;
    villeDepart: string;
    hotel: {
        nom: string;
        coordonnees: string;
        nombreEtoiles: number;
        nombreChambres: number;
        description: string;
        caracteristiques: any;
        avis: string
    }
    dateDepart: string;
    duree: string;
    prix: number;
    rabais: number;
    affichageRabais: boolean;
    nouveauPrix: number;
    vedette: boolean
}