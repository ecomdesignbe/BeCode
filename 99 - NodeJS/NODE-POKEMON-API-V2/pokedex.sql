-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : lun. 15 juil. 2024 à 21:12
-- Version du serveur : 11.3.2-MariaDB
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pokedex`
--

-- --------------------------------------------------------

--
-- Structure de la table `pokemons`
--

DROP TABLE IF EXISTS `pokemons`;
CREATE TABLE IF NOT EXISTS `pokemons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `hp` int(11) NOT NULL,
  `cp` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `types` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `pokemons`
--

INSERT INTO `pokemons` (`id`, `name`, `hp`, `cp`, `picture`, `types`, `created`) VALUES
(1, 'Bulbizarre', 25, 5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png', 'Plante,Poison', '2024-07-12 13:07:59'),
(2, 'Salamèche', 28, 6, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png', 'Feu', '2024-07-12 13:07:59'),
(3, 'Carapuce', 21, 4, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', 'Eau', '2024-07-12 13:07:59'),
(4, 'Aspicot', 16, 2, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png', 'Insecte,Poison', '2024-07-12 13:07:59'),
(5, 'Roucool', 30, 7, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png', 'Normal,Vol', '2024-07-12 13:07:59'),
(6, 'Rattata', 18, 6, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png', 'Normal', '2024-07-12 13:07:59'),
(7, 'Piafabec', 14, 5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png', 'Normal,Vol', '2024-07-12 13:07:59'),
(8, 'Abo', 16, 4, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png', 'Poison', '2024-07-12 13:07:59'),
(9, 'Pikachu', 21, 7, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png', 'Electrik', '2024-07-12 13:07:59'),
(10, 'Sabelette', 19, 3, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png', 'Normal', '2024-07-12 13:07:59'),
(11, 'Mélofée', 25, 5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png', 'Fée', '2024-07-12 13:07:59'),
(12, 'Groupix', 17, 8, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png', 'Feu', '2024-07-12 13:07:59');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
