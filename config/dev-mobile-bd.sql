-- phpMyAdmin SQL Dump
-- version 5.2.1-1.fc37
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 24 mars 2023 à 13:16
-- Version du serveur : 10.5.18-MariaDB
-- Version de PHP : 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dev-mobile-bd`
--

-- --------------------------------------------------------

--
-- Structure de la table `AffectationBenevoleCreneau`
--

CREATE TABLE `AffectationBenevoleCreneau` (
  `idZone` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `idCreneau` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `AffectationCreneauJour`
--

CREATE TABLE `AffectationCreneauJour` (
  `idJour` int(11) NOT NULL,
  `idCreneau` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `AffectationFestivalZones`
--

CREATE TABLE `AffectationFestivalZones` (
  `idFestival` int(11) NOT NULL,
  `idZone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `AffectationJourFestival`
--

CREATE TABLE `AffectationJourFestival` (
  `idFestival` int(11) NOT NULL,
  `idJour` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Creneau`
--

CREATE TABLE `Creneau` (
  `idCreneau` int(11) NOT NULL,
  `heureDebut` time NOT NULL,
  `heureFin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Creneau`
--

INSERT INTO `Creneau` (`idCreneau`, `heureDebut`, `heureFin`) VALUES
(5, '08:00:00', '10:00:00'),
(6, '10:00:00', '12:00:00'),
(7, '12:00:00', '14:00:00'),
(8, '14:00:00', '16:00:00'),
(9, '16:00:00', '18:00:00'),
(10, '18:00:00', '20:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `Festival`
--

CREATE TABLE `Festival` (
  `idFestival` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `annee` year(4) NOT NULL,
  `nbJours` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `cloture` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `Festival`
--

INSERT INTO `Festival` (`idFestival`, `nom`, `annee`, `nbJours`, `cloture`) VALUES
(1, 'Toulouse Game Show', '2023', 3, 0);

-- --------------------------------------------------------

--
-- Structure de la table `JourFestival`
--

CREATE TABLE `JourFestival` (
  `idJour` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `ouverture` time NOT NULL,
  `fermeture` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `JourFestival`
--

INSERT INTO `JourFestival` (`idJour`, `nom`, `ouverture`, `fermeture`) VALUES
(3, '1er jour TGS', '08:00:00', '18:00:00'),
(4, '2eme jour TGS', '09:30:00', '20:30:00');

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateur`
--

CREATE TABLE `Utilisateur` (
  `idUtilisateur` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Utilisateur`
--

INSERT INTO `Utilisateur` (`idUtilisateur`, `nom`, `prenom`, `email`, `mdp`, `isAdmin`) VALUES
(1, 'mathieu', 'emma', '1234', '$2a$10$9cPrTjUiqvMk/QhSFgr.t.XjfDMWDfCwBCUYPVh5pfAZL32lfM/2.', 1),
(3, 'bridgerton', '', '', '', 0),
(5, 'LE Nord', 'bjr', 'truc@mail', '$2a$10$UcTK3OhYmYFlIV48boQ5xOrM8jO0FWO8IzltOCujjQHfh407gULvi', 0),
(6, 'test', 'test', 'test', '$2a$10$1SHZx8yjscbr5eny8T9fsOla3CE2Km3disnO13nfrTskyZTekHO7C', 0),
(7, 'aaa', 'zzz', 'rrr', '$2a$10$SRcIVhaDosBbRICi3zNn/.ldOwhBwBrv9.Ymcd/AVCeVCX6FPPqIu', 0),
(8, 'assasin', 'assassin', 'assassin', '$2a$10$yqLfgyzrGNJZn3eHSVBQXuTQecfRP6Ldui4oX7qXjhGd69OJBj73u', 0),
(9, 'canada', 'quebec', 'canada', '$2a$10$R907/mX8zTva3OpoSYsRy.o7bxSw0zXmLxecU1fY3Fo2qZgZIJw46', 0),
(10, 'francis', 'michel', 'abcd', '$2a$10$8PmVVyK/EGPryMZQHbWMO.KSXUfEXukaQL0uQd9DDbCODJQeffqZS', 0),
(11, 'pas miam', 'miam', 'miam', '$2a$10$aeErtjbtVMOsJ60xMmtSCuO88Dg4VifC3bvnjHtyQlwYeuJEPmzdq', 0),
(12, 'aaa', 'aaaa', 'gogo', '$2a$10$vtsrGeyghrcZ4e1SxobrpuUEGok.JBeZDs0rpc0CbkOFLBtXPnEgS', 0),
(13, 'tutu', 'tutu', 'tutu', '$2a$10$8L/vLAtm1H6qhjhTvp17.uGvjd0jOjfhXFHb.j6.6dN3TtmHpp5f2', 0),
(14, 'Jacques', 'Jacques2', '456', '$2a$10$K3MvLR6AKxjU/fGbfvCK7ertfHMkWmk8THw6yub8f41F7ZOrQ0Zdm', 0);

-- --------------------------------------------------------

--
-- Structure de la table `Zone`
--

CREATE TABLE `Zone` (
  `idZone` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `nbBenevoles` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Zone`
--

INSERT INTO `Zone` (`idZone`, `nom`, `nbBenevoles`) VALUES
(1, 'Esplanade-Gauche 1', 3),
(3, 'Esplanade-Gauche 2', 5),
(4, 'Esplanade-Gauche 3', 6),
(5, 'Esplanade-Centre 1', 0),
(6, 'Esplanade-Centre 2', 0),
(7, 'Esplanade-Centre 3', 8),
(8, 'Esplanade-Centre 4', 0),
(9, 'Esplanade-Centre 5', 7),
(10, 'Esplanade-Droite 1', 0),
(11, 'Esplanade-Droite 2', 9),
(12, 'Esplanade-Droite 3', 0),
(13, 'Esplanade-Droite 4', 0),
(14, 'Esplanade-Accueil', 0),
(15, 'Antigone-Buvette', 0),
(16, 'Antigone-Entrée 1', 0),
(17, 'Antigone-Entrée 2', 0),
(18, 'Antigone-Entrée 3', 0),
(19, 'Antigone-Entrée 4', 0),
(20, 'Antigone-Entrée 5', 0),
(21, 'Antigone-Fond 1', 0),
(22, 'Antigone-Fond 2', 0),
(23, 'Antigone-Proto', 0),
(24, 'Antigone-Loup-Garous', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `AffectationBenevoleCreneau`
--
ALTER TABLE `AffectationBenevoleCreneau`
  ADD PRIMARY KEY (`idZone`,`idUtilisateur`,`idCreneau`),
  ADD KEY `benevole` (`idUtilisateur`),
  ADD KEY `creneau` (`idCreneau`);

--
-- Index pour la table `AffectationCreneauJour`
--
ALTER TABLE `AffectationCreneauJour`
  ADD PRIMARY KEY (`idJour`,`idCreneau`),
  ADD KEY `CreneauEtrangere` (`idCreneau`);

--
-- Index pour la table `AffectationFestivalZones`
--
ALTER TABLE `AffectationFestivalZones`
  ADD PRIMARY KEY (`idFestival`,`idZone`),
  ADD KEY `ZoneEtrangere` (`idZone`);

--
-- Index pour la table `AffectationJourFestival`
--
ALTER TABLE `AffectationJourFestival`
  ADD PRIMARY KEY (`idFestival`,`idJour`),
  ADD KEY `JourEtrangere` (`idJour`);

--
-- Index pour la table `Creneau`
--
ALTER TABLE `Creneau`
  ADD PRIMARY KEY (`idCreneau`);

--
-- Index pour la table `Festival`
--
ALTER TABLE `Festival`
  ADD PRIMARY KEY (`idFestival`);

--
-- Index pour la table `JourFestival`
--
ALTER TABLE `JourFestival`
  ADD PRIMARY KEY (`idJour`);

--
-- Index pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  ADD PRIMARY KEY (`idUtilisateur`);

--
-- Index pour la table `Zone`
--
ALTER TABLE `Zone`
  ADD PRIMARY KEY (`idZone`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Creneau`
--
ALTER TABLE `Creneau`
  MODIFY `idCreneau` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `Festival`
--
ALTER TABLE `Festival`
  MODIFY `idFestival` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `JourFestival`
--
ALTER TABLE `JourFestival`
  MODIFY `idJour` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  MODIFY `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `Zone`
--
ALTER TABLE `Zone`
  MODIFY `idZone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `AffectationBenevoleCreneau`
--
ALTER TABLE `AffectationBenevoleCreneau`
  ADD CONSTRAINT `benevole` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creneau` FOREIGN KEY (`idCreneau`) REFERENCES `Creneau` (`idCreneau`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `zone` FOREIGN KEY (`idZone`) REFERENCES `Zone` (`idZone`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `AffectationCreneauJour`
--
ALTER TABLE `AffectationCreneauJour`
  ADD CONSTRAINT `CreneauEtrangere` FOREIGN KEY (`idCreneau`) REFERENCES `Creneau` (`idCreneau`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `JourEtranger` FOREIGN KEY (`idJour`) REFERENCES `JourFestival` (`idJour`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `AffectationFestivalZones`
--
ALTER TABLE `AffectationFestivalZones`
  ADD CONSTRAINT `FestiEtrangere` FOREIGN KEY (`idFestival`) REFERENCES `Festival` (`idFestival`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ZoneEtrangere` FOREIGN KEY (`idZone`) REFERENCES `Zone` (`idZone`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `AffectationJourFestival`
--
ALTER TABLE `AffectationJourFestival`
  ADD CONSTRAINT `AffectationJourFestival` FOREIGN KEY (`idFestival`) REFERENCES `Festival` (`idFestival`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `JourEtrangere` FOREIGN KEY (`idJour`) REFERENCES `JourFestival` (`idJour`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
