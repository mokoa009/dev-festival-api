-- phpMyAdmin SQL Dump
-- version 5.2.1-1.fc37
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 07 mars 2023 à 14:07
-- Version du serveur : 10.5.18-MariaDB
-- Version de PHP : 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `simplify_awi_festival`
--

-- --------------------------------------------------------

--
-- Structure de la table `AttributionJeu`
--

CREATE TABLE `AttributionJeu` (
  `idZone` int(11) NOT NULL,
  `idJeu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `AttributionJeu`
--

INSERT INTO `AttributionJeu` (`idZone`, `idJeu`) VALUES
(1, 1),
(20, 2),
(24, 1);

-- --------------------------------------------------------

--
-- Structure de la table `attributionZone`
--

CREATE TABLE `attributionZone` (
  `idZone` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `idCreneau` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `attributionZone`
--

INSERT INTO `attributionZone` (`idZone`, `idUtilisateur`, `idCreneau`) VALUES
(1, 1, 1),
(1, 6, 1),
(8, 6, 3),
(15, 3, 3),
(22, 8, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Creneau`
--

CREATE TABLE `Creneau` (
  `idCreneau` int(11) NOT NULL,
  `dateDebut` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateFin` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Creneau`
--

INSERT INTO `Creneau` (`idCreneau`, `dateDebut`, `dateFin`) VALUES
(1, '2023-03-07 10:00:00', '2023-03-07 12:00:00'),
(2, '2023-03-07 12:00:00', '2023-03-07 14:00:00'),
(3, '2023-03-08 10:00:00', '2023-03-08 12:00:00'),
(4, '2023-03-09 14:00:00', '2023-03-09 16:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `Jeu`
--

CREATE TABLE `Jeu` (
  `idJeu` int(11) NOT NULL,
  `idType` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Jeu`
--

INSERT INTO `Jeu` (`idJeu`, `idType`, `nom`) VALUES
(1, 1, 'puissance 4'),
(2, 4, 'jspwesh');

-- --------------------------------------------------------

--
-- Structure de la table `TypeJeu`
--

CREATE TABLE `TypeJeu` (
  `idType` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `TypeJeu`
--

INSERT INTO `TypeJeu` (`idType`, `nom`) VALUES
(1, 'famille'),
(2, 'enfant'),
(3, 'ambiance'),
(4, 'initié'),
(5, 'expert ++');

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
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Zone`
--

INSERT INTO `Zone` (`idZone`, `nom`) VALUES
(1, 'Esplanade-Gauche 1'),
(3, 'Esplanade-Gauche 2'),
(4, 'Esplanade-Gauche 3'),
(5, 'Esplanade-Centre 1'),
(6, 'Esplanade-Centre 2'),
(7, 'Esplanade-Centre 3'),
(8, 'Esplanade-Centre 4'),
(9, 'Esplanade-Centre 5'),
(10, 'Esplanade-Droite 1'),
(11, 'Esplanade-Droite 2'),
(12, 'Esplanade-Droite 3'),
(13, 'Esplanade-Droite 4'),
(14, 'Esplanade-Accueil'),
(15, 'Antigone-Buvette'),
(16, 'Antigone-Entrée 1'),
(17, 'Antigone-Entrée 2'),
(18, 'Antigone-Entrée 3'),
(19, 'Antigone-Entrée 4'),
(20, 'Antigone-Entrée 5'),
(21, 'Antigone-Fond 1'),
(22, 'Antigone-Fond 2'),
(23, 'Antigone-Proto'),
(24, 'Antigone-Loup-Garous');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `AttributionJeu`
--
ALTER TABLE `AttributionJeu`
  ADD PRIMARY KEY (`idZone`,`idJeu`),
  ADD KEY `zone-jeu-zone` (`idJeu`);

--
-- Index pour la table `attributionZone`
--
ALTER TABLE `attributionZone`
  ADD PRIMARY KEY (`idZone`,`idUtilisateur`,`idCreneau`),
  ADD KEY `benevole` (`idUtilisateur`),
  ADD KEY `creneau` (`idCreneau`);

--
-- Index pour la table `Creneau`
--
ALTER TABLE `Creneau`
  ADD PRIMARY KEY (`idCreneau`);

--
-- Index pour la table `Jeu`
--
ALTER TABLE `Jeu`
  ADD PRIMARY KEY (`idJeu`),
  ADD KEY `typeJeu` (`idType`);

--
-- Index pour la table `TypeJeu`
--
ALTER TABLE `TypeJeu`
  ADD PRIMARY KEY (`idType`);

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
  MODIFY `idCreneau` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Jeu`
--
ALTER TABLE `Jeu`
  MODIFY `idJeu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `TypeJeu`
--
ALTER TABLE `TypeJeu`
  MODIFY `idType` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
-- Contraintes pour la table `AttributionJeu`
--
ALTER TABLE `AttributionJeu`
  ADD CONSTRAINT `zone-jeu` FOREIGN KEY (`idZone`) REFERENCES `Zone` (`idZone`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `zone-jeu-zone` FOREIGN KEY (`idJeu`) REFERENCES `Jeu` (`idJeu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `attributionZone`
--
ALTER TABLE `attributionZone`
  ADD CONSTRAINT `benevole` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creneau` FOREIGN KEY (`idCreneau`) REFERENCES `Creneau` (`idCreneau`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `zone` FOREIGN KEY (`idZone`) REFERENCES `Zone` (`idZone`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Jeu`
--
ALTER TABLE `Jeu`
  ADD CONSTRAINT `typeJeu` FOREIGN KEY (`idType`) REFERENCES `TypeJeu` (`idType`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
