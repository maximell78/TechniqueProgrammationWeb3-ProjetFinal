import { Forfaits } from "./forfaits";

export const FORFAITS: Forfaits[] = [
    {   id: '1',
        region: 'europe',
        destination: 'Paris, France',
        villeDepart: 'De Montréal, Québec',
        hotel: {
            nom: 'Citadines Bastille Marais Paris',
            coordonnees: '37, boulevard Richard Lenoir 75011 Paris FRANCE',
            nombreEtoiles: 3,
            nombreChambres: 138,
            description: 'Située à 5 minutes à pied de l’animation de la place de la Bastille et à 10 minutes à pied du magnifique quartier du Marais, le Citadines Bastille Marais Paris dispose de 108 studios (1 lit double ou 2 lits simples) et 30 appartements.',
            caracteristiques: ['Métro: Bréguet-Sabin', 'Chemin Vert En ville','1 édifice de 7 étages', 'Ascenseur', 'Wi-Fi : hall, chambre', 'Climatisation centrale', 'Stationnement ($)', '1 restaurant', 'Coffret de sûreté', 'Accessible', 'Séchoir à cheveux'],
            avis: '(3264 avis)'
        },
        dateDepart: '2021-12-20',
        duree: ' | 7 jours',
        prix: 3769,
        rabais: 0,
        affichageRabais: false,
        nouveauPrix: 0,
        vedette: true
    },
    {   id: '2',
        region: 'europe',
        destination: 'Kinetta, Grèce',
        villeDepart: 'De Montréal, Québec',
        hotel: {
            nom: 'Kinetta Beach Resort And Spa',
            coordonnees: '57th km of Old National Road Athens Corinth - Kinetta Attica',
            nombreEtoiles: 4,
            nombreChambres: 253,
            description: 'Situé entre Athènes et le canal de Corinthe, le Kinetta Beach est l’hôtel idéal pour des vacances de détente en bord de mer. À moins d’un km de la gare de train, vous serez en 45 minutes à peine en plein cœur d’Athènes. L’hôtel propose 253 chambres élégamment décorées.',
            caracteristiques: ['Kinetta', 'Face à la plage', '16 édifices de 2 étages', 'Wi-Fi : hall', 'Climatisation individuelle', 'Stationnement', '($)3 restaurants','2 bars', '2 piscines', 'Coffret de sûreté ($)Accessible', 'Séchoir à cheveux'],
            avis: '(4789 avis)'
        },
        dateDepart: '2021-12-20',
        duree: ' | 14 jours',
        prix: 2549,
        rabais: 700,
        affichageRabais: true,
        nouveauPrix: 1849,
        vedette: false
    },
    {   id: '3',
        region: 'europe',
        destination: 'Rome, Italie',
        villeDepart: 'De Montréal, Québec',
        hotel: {
            nom: 'Hotel de Petris',
            coordonnees: 'Via Rasella 142, Rome, Italie, 00187',
            nombreEtoiles: 3,
            nombreChambres: 65,
            description: 'Pour goûter à la dolce vita, cet hôtel est idéalement situé à distance de marche de la fontaine de Trevi, des Marches espagnoles, du Panthéon et de la piazza Navona. Il compte 67 chambres confortables, agréablement décorées et offrant un cadre intime et une terrasse panoramique.',
            caracteristiques: ['Hotel de Petris', 'Métro: Barberini', '1 édifices de 5 étages', 'Wi-Fi : hall', 'Climatisation individuelle', 'Stationnement', '1 restaurant','1 bar', 'Ascenceur', 'Coffret de sûreté', 'Séchoir à cheveux'],
            avis: '(1568 avis)'
        },
        dateDepart: '2021-12-20',
        duree: ' | 8 jours',
        prix: 2009,
        rabais: 0,
        affichageRabais: false,
        nouveauPrix: 0,
        vedette: true
    },
    {   id: '4',
        region: 'europe',
        destination: 'Lisbone, Portugal',
        villeDepart: 'De Montréal, Québec',
        hotel: {
            nom: 'Hotel Mundial',
            coordonnees: 'Largo Martim Moniz, 1100-341 Lisbone Portugal',
            nombreEtoiles: 4,
            nombreChambres: 350,
            description: "L'Hôtel Mundial est situé au coeur de Lisbonne, près de tous les services de transport en commun.",
            caracteristiques: ['Métro: Martim Moniz', 'Centre-ville', '1 édifices', 'Wi-Fi : hall', 'Climatisation individuelle', 'Stationnement', '2 restaurants','2 bars', "Près d'un attrait/ville/lieu historique", 'Coffret de sûreté', 'Séchoir à cheveux'],
            avis: '(3411 avis)'
        },
        dateDepart: '2021-12-20',
        duree: ' | 7 jours',
        prix: 1519,
        rabais: 100,
        affichageRabais: true,
        nouveauPrix: 1419,
        vedette: true
    },
    {   id: '5',
        region: 'europe',
        destination: 'Londres, Royaume-Uni',
        villeDepart: 'De Montréal, Québec',
        hotel: {
            nom: 'ME London',
            coordonnees: '336-337 The Strand WC2R 1HA Londre',
            nombreEtoiles: 5,
            nombreChambres: 157,
            description: "Situé en plein coeur du quartier West End de Londres, et entouré de théâtres, boutiques et boîtes de nuit, à environ 46 km de l'aéroport. Un hôtel avant-gardiste, il propose des vues panoramiques spectaculaires du haut de son bar sur le toit, une cuisine gastronomique internationale et des chambres modernes au design exquis, toutes avec vue sur la Tamise.",
            caracteristiques: ['Métro: Covent Garden station', 'En ville', 'Ascenceur', 'Wi-Fi : hall, dans tout le complexe', 'Climatisation individuelle', 'Stationnement', '2 restaurants','3 bars', 'Coffret de sûreté', 'Séchoir à cheveux'],
            avis: '(1658 avis)'
        },
        dateDepart: '2021-12-20',
        duree: ' | 18 jours',
        prix: 6699,
        rabais: 1100,
        affichageRabais: true,
        nouveauPrix: 5599,
        vedette: true
    },
    {   id: '6',
        region: 'europe',
        destination: 'Barcelone, Espagne',
        villeDepart: 'De Montréal, Québec',
        hotel: {
            nom: 'Hotel Gotico',
            coordonnees: '14, Vieille ville, 08002 Barcelone, Espagne ',
            nombreEtoiles: 4,
            nombreChambres: 81,
            description: "Description Générale: Bienvenue à l’hôtel Hotel Gotico à Barcelona-Ciutat Vella. Pour faciliter votre séjour, vous trouverez à votre disposition un hall, la climatisation, 2 ascenseurs et une réception. Le personnel de cet hôtel parle anglais, espagnol, allemand et français. L’hôtel se situe à proximité une station de train, une station de métro, d’un office de tourisme, des bars et restaurants et des arrêts d’autobus. Accessible depuis l'hôtel: Puerto de Barcelona (200 m), Las Ramblas (100 m), Town Hall (25 m) et Picasso Museum (200 m). Pour votre divertissement, l'hôtel est équipé d'un salon de télévision",
            caracteristiques: ['Métro: Métro Jaume', '5 plages à proximité', 'Services de nettoyage', "Wi-Fi : hall, dans tout l'établissement", 'Climatisation individuelle', 'Stationnement', '1 restaurants','2 bars', 'Séchoir à cheveux'],
            avis: '(2336 avis)'
        },
        dateDepart: '2021-12-20',
        duree: ' | 10 jours',
        prix: 2200,
        rabais: 300,
        affichageRabais: true,
        nouveauPrix: 1900,
        vedette: false
    },
    {   id: '7',
        region: 'caraibe',
        destination: 'Varadero, Cuba',
        villeDepart: 'De Montréal, Québec',
        hotel: {
            nom: 'Paradisus Princesa Del Mar',
            coordonnees: 'Carretera Las Morlas, Km 19.5 Varadero Matanzas Cuba',
            nombreEtoiles: 5,
            nombreChambres: 630,
            description: "Situé sur une plage immaculée de sable blanc à Varadero, le Paradisus Princesa del Mar offre des escapades sophistiquées entre adultes dans un décor tropical reposant. Prélassez-vous sur une chaise longue à côté de l’eau, sirotez un mojito au bar dans la piscine ou plongez dans les piscines de style lagon de l’hôtel, dotées de jets d’hydromassage. Rendez-vous sur la plage immaculée de sable blanc pour essayer un éventail de sports nautiques offerts par l’hôtel, dont le kayak, la plongée avec tuba et le pédalo, ou prélassez-vous simplement sous un palapa. Choisissez parmi un éventail de restaurants sur place, servant des favoris internationaux au buffet ou une cuisine latine authentique, ou encore savourez un repas dans votre suite grâce au service aux chambres en tout temps. Pour des commodités supplémentaires et un service exclusif, optez pour un surclassement au Royal Service et profitez d’un service de majordome, d’une conciergerie à la plage et à la piscine et de droits de jeu illimités au club de golf de Varadero à proximité, entre autres.",
            caracteristiques: ['5 plages à proximité', '3 piscines', 'Services de nettoyage', "Wi-Fi : hall, dans tout l'établissement", 'Climatisation individuelle', 'Stationnement', '9 restaurants','10 bars', 'Séchoir à cheveux'],
            avis: '(2154 avis)'
        },
        dateDepart: '2021-12-20',
        duree: ' | 10 jours',
        prix: 2325,
        rabais: 800,
        affichageRabais: true,
        nouveauPrix: 1525,
        vedette: true
    }
]