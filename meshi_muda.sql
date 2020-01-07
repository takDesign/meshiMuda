-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 02, 2020 at 09:11 PM
-- Server version: 5.6.41-84.1
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meshi_muda`
--

-- --------------------------------------------------------

--
-- Table structure for table `businesses`
--

CREATE TABLE `businesses` (
  `id` mediumint(50) NOT NULL,
  `strName` varchar(255) NOT NULL,
  `strEmail` varchar(255) NOT NULL,
  `strPassword` varchar(255) NOT NULL,
  `strWasteType` varchar(255) NOT NULL,
  `strAddress` varchar(255) NOT NULL,
  `strCity` varchar(255) NOT NULL,
  `strProvince` varchar(255) NOT NULL,
  `strZip` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `businesses`
--

INSERT INTO `businesses` (`id`, `strName`, `strEmail`, `strPassword`, `strWasteType`, `strAddress`, `strCity`, `strProvince`, `strZip`) VALUES
(1, 'Famoso', 'info@famoso.com', 'fff', 'Mistaken order', '1380 Commercial Drive', 'Vancouver', 'BC', 'V5L 3X6'),
(2, 'Livia Bakery', 'info@livia.com', 'lll', 'Mistaken order', '1399 Commercial Drive', 'Vancouver', 'BC', 'V5L 3X5'),
(3, 'Bandidas Taqueria', 'info@bandidas.com', 'bbb', 'Food expiring', '2781 Commercial Drive', 'Vancouver', 'BC', 'V5N 4C5'),
(4, 'JamJar', 'info@jamjar.com', 'jjj', 'Expiring food', '2280 Commercial Drive', 'Vancouver', 'BC', 'V5N 4B6');

-- --------------------------------------------------------

--
-- Table structure for table `food_allergens`
--

CREATE TABLE `food_allergens` (
  `id` mediumint(50) NOT NULL,
  `strName` varchar(255) NOT NULL,
  `strDescription` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `food_details`
--

CREATE TABLE `food_details` (
  `id` mediumint(50) NOT NULL,
  `nFoodTypeID` mediumint(50) NOT NULL,
  `nFoodAllergenID` mediumint(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `food_type`
--

CREATE TABLE `food_type` (
  `id` mediumint(50) NOT NULL,
  `strName` varchar(255) NOT NULL,
  `strDescription` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` mediumint(50) NOT NULL,
  `nBusinessID` mediumint(50) NOT NULL,
  `strBusinessName` varchar(255) NOT NULL,
  `strBusinessEmail` varchar(255) NOT NULL,
  `nUserID` mediumint(50) NOT NULL,
  `strUserName` varchar(255) NOT NULL,
  `strUserEmail` varchar(255) NOT NULL,
  `nPrice` float(10,2) NOT NULL,
  `dtOrdered` datetime NOT NULL,
  `strDeliveryWindow` varchar(255) NOT NULL,
  `timePickup` time NOT NULL,
  `nOrderedFoodID` mediumint(50) NOT NULL,
  `bActiveOrder` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `nBusinessID`, `strBusinessName`, `strBusinessEmail`, `nUserID`, `strUserName`, `strUserEmail`, `nPrice`, `dtOrdered`, `strDeliveryWindow`, `timePickup`, `nOrderedFoodID`, `bActiveOrder`) VALUES
(1, 1, 'Famoso', 'admin@famoso.com', 2, 'Sam Winchester', 'sw@supernatural.com', 5.00, '2019-12-09 00:00:00', '', '21:00:00', 1, 0),
(2, 2, 'Livia Bakery', 'orders@livia.com', 4, 'Carol Peletier', 'cp@kingdom.com', 7.00, '2019-12-06 00:00:00', '', '18:00:00', 2, 0),
(5, 4, 'JamJar', 'info@jamjar.com', 3, 'Rick Grimes', 'rg@alexandria.com', 5.00, '2019-12-02 00:00:00', '', '19:00:00', 3, 0),
(6, 3, 'Bandidas Taqueria', 'info@bandidas.com', 1, 'Dean Winchester', 'dw@supernatural.com', 6.00, '2019-12-09 00:00:00', '', '23:00:00', 4, 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders_food`
--

CREATE TABLE `orders_food` (
  `id` mediumint(50) NOT NULL,
  `nFoodAllergenID` mediumint(50) NOT NULL,
  `strDescription` longtext NOT NULL,
  `strImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` mediumint(50) NOT NULL,
  `strFirstName` varchar(255) NOT NULL,
  `strLastName` varchar(255) NOT NULL,
  `strEmail` varchar(255) NOT NULL,
  `strPassword` varchar(255) NOT NULL,
  `strCity` varchar(255) NOT NULL,
  `strAuthToken` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `strFirstName`, `strLastName`, `strEmail`, `strPassword`, `strCity`, `strAuthToken`) VALUES
(1, 'Dean', 'Winchester', 'dw@supernatural.com', 'dw', 'Surrey', NULL),
(2, 'Sam', 'Winchester', 'sw@supernatural.com', 'sw', 'Langley', NULL),
(3, 'Rick', 'Grimes', 'rg@alexandria.com', 'rg', 'Vancouver', NULL),
(4, 'Carol', 'Peletier', 'cp@kingdom.com', 'cp', 'Kitsilano', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `businesses`
--
ALTER TABLE `businesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `food_allergens`
--
ALTER TABLE `food_allergens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `food_details`
--
ALTER TABLE `food_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `food_type`
--
ALTER TABLE `food_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders_food`
--
ALTER TABLE `orders_food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `businesses`
--
ALTER TABLE `businesses`
  MODIFY `id` mediumint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `food_allergens`
--
ALTER TABLE `food_allergens`
  MODIFY `id` mediumint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `food_details`
--
ALTER TABLE `food_details`
  MODIFY `id` mediumint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `food_type`
--
ALTER TABLE `food_type`
  MODIFY `id` mediumint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` mediumint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders_food`
--
ALTER TABLE `orders_food`
  MODIFY `id` mediumint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` mediumint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
