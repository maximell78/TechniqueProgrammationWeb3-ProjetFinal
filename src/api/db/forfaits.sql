-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 01, 2022 at 12:25 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projet_forfaits_voyages`
--

-- --------------------------------------------------------

--
-- Table structure for table `forfaits`
--

CREATE TABLE `forfaits` (
  `id` int(11) NOT NULL,
  `destination` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `villeDepart` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coordonnees` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nombreEtoiles` decimal(11,0) NOT NULL,
  `nombreChambres` int(11) NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `caracteristiques` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `avis` int(11) NOT NULL,
  `dateDepart` date NOT NULL,
  `dateRetour` date NOT NULL,
  `prix` decimal(11,0) NOT NULL,
  `rabais` decimal(11,0) NOT NULL,
  `affichageRabais` tinyint(1) NOT NULL,
  `nouveauPrix` decimal(11,0) NOT NULL,
  `vedette` tinyint(1) NOT NULL,
  `region` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `forfaits`
--

INSERT INTO `forfaits` (`id`, `destination`, `villeDepart`, `nom`, `coordonnees`, `nombreEtoiles`, `nombreChambres`, `description`, `caracteristiques`, `avis`, `dateDepart`, `dateRetour`, `prix`, `rabais`, `affichageRabais`, `nouveauPrix`, `vedette`, `region`) VALUES
(1, 'Paris, France', 'Montréal, Québec', 'Citadines Bastille Marais Paris', '37, boulevard Richard Lenoir 75011 Paris FRANCE', '3', 138, 'Située à 5 minutes à pied de l’animation de la place de la Bastille et à 10 minutes à pied du magnifique quartier du Marais, le Citadines Bastille Marais Paris dispose de 108 studios (1 lit double ou 2 lits simples) et 30 appartements.', 'Métro: Bréguet-Sabin; Chemin Vert En ville; 1 édifice de 7 étages; Ascenseur;  Wi-Fi : hall, chambre; Climatisation centrale; Stationnement ($); 1 restaurant; Coffret de sûreté; Accessible; Séchoir à cheveux', 3264, '2022-02-25', '2022-03-05', '3799', '200', 1, '3599', 1, 'europe'),
(3, 'Kinetta, Grèce', 'Montréal, Québec', 'Kinetta Beach Resort And Spa', '57th km of Old National Road Athens Corinth - Kinetta Attica', '4', 253, 'Situé entre Athènes et le canal de Corinthe, le Kinetta Beach est l’hôtel idéal pour des vacances de détente en bord de mer. À moins d’un km de la gare de train, vous serez en 45 minutes à peine en plein cœur d’Athènes. L’hôtel propose 253 chambres élégamment décorées.', 'Kinetta; Face à la plage; 16 édifices de 2 étages; Wi-Fi : hall; Climatisation individuelle; Stationnement ($); 3 restaurants; 2 bars; 2 piscines; Coffret de sûreté ($)Accessible; Séchoir à cheveux', 4789, '2022-02-23', '2022-03-09', '2549', '700', 1, '1849', 0, 'europe'),
(11, 'Varadero, Cuba', 'De Montréal, Québec', 'Paradisus Princesa Del Mar', 'Carretera Las Morlas, Km 19.5 Varadero Matanzas Cuba', '5', 630, 'Situé sur une plage immaculée de sable blanc à Varadero, le Paradisus Princesa del Mar offre des escapades sophistiquées entre adultes dans un décor tropical reposant. Prélassez-vous sur une chaise longue à côté de l’eau, sirotez un mojito au bar dans la piscine ou plongez dans les piscines de style lagon de l’hôtel, dotées de jets d’hydromassage.', 'À venir', 2154, '2022-03-05', '2022-03-13', '2325', '800', 1, '1525', 1, 'caraibe'),
(12, 'Lisbone, Portugal', 'Montréal, Québec', 'Hotel Mundial', 'Largo Martim Moniz, 1100-341 Lisbone Portugal', '4', 350, 'L\'Hôtel Mundial est situé au coeur de Lisbonne, près de tous les services de transport en commun.', 'Métro: Martim Moniz; Centre-ville; 1 édifices; Wi-Fi : hall; Climatisation individuelle; Stationnement; 2 restaurants; 2 bars; Près d\'un attrait/ville/lieu historique; Coffret de sûreté; Séchoir à cheveux', 3411, '2022-03-05', '2022-03-12', '1519', '100', 1, '1419', 1, 'europe'),
(13, 'Barcelone, Espagne', 'Montréal, Québec', 'Hotel Gotico', '14, Vieille ville, 08002 Barcelone, Espagne', '4', 81, 'Description Générale: Bienvenue à l’hôtel Hotel Gotico à Barcelona-Ciutat Vella. Pour faciliter votre séjour, vous trouverez à votre disposition un hall, la climatisation, 2 ascenseurs et une réception. Le personnel de cet hôtel parle anglais, espagnol, allemand et français. L’hôtel se situe à proximité une station de train, une station de métro, d’un office de tourisme, des bars et restaurants et des arrêts d’autobus. Accessible depuis l\'hôtel: Puerto de Barcelona (200 m), Las Ramblas (100 m), Town Hall (25 m) et Picasso Museum (200 m). Pour votre divertissement, l\'hôtel est équipé d\'un salon de télévision.', 'Métro: Métro Jaume;5 plages à proximité;Services de nettoyage;Wi-Fi : hall, dans tout l\'établissement;Climatisation individuelle;Stationnement;1 restaurants;2 bars;Séchoir à cheveux', 2336, '2021-12-20', '2021-12-30', '2200', '0', 0, '0', 0, 'europe'),
(14, 'La Havane, Cuba', 'Montreal, Quebec', 'Hotel Atlantico', 'Avda. de las Terrazas, Sta Ma del Mar, Habana del Este,La Habana,Cuba', '3', 92, 'Cet établissement est à 1 minute à pied de la plage. Doté d\'un bar, l\'Hotel Atlantico vous accueille à La Havane, en bord de mer.\r\nToutes les chambres disposent de la climatisation, d\'une télévision par satellite et d\'une salle de bains privative pourvue d\'une douche.\r\nLe centre-ville de La Havane se trouve à seulement 20 minutes de route. L\'aéroport international Jose Martí se situe à 40 minutes en voiture.', 'N/A', 2356, '2022-02-21', '2022-02-28', '2050', '0', 0, '0', 0, 'caraibe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `forfaits`
--
ALTER TABLE `forfaits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `forfaits`
--
ALTER TABLE `forfaits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
