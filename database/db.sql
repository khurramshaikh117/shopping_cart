-- Adminer 4.8.1 MySQL 5.7.31 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';
CREATE DATABASE shopping_cart;
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `offer` varchar(255) NOT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `items` (`id`, `item_name`, `price`, `offer`, `created_on`) VALUES
(1,	'Apples',	'50',	'3 for 130',	'2022-04-02 20:19:50'),
(2,	'Bananas',	'30',	'2 for 45',	'2022-04-02 20:19:50'),
(3,	'Carrots',	'20',	'2 for 38,3 for 50',	'2022-04-02 20:21:01'),
(4,	'Dragon Fruit',	'15',	'5 if purchased with Apples',	'2022-04-02 20:22:03'),
(5,	'Eggs',	'5',	'',	'2022-04-02 20:22:11');

-- 2022-04-03 10:38:22