-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2023 at 09:24 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aliwant`
--

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `discount_id` int(11) NOT NULL,
  `discount_source` varchar(255) NOT NULL,
  `discount_description` varchar(255) DEFAULT NULL,
  `discount_code` varchar(255) DEFAULT NULL,
  `discount_value` varchar(50) NOT NULL,
  `discount_expiration` date NOT NULL,
  `discount_extraDetails` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`discount_id`, `discount_source`, `discount_description`, `discount_code`, `discount_value`, `discount_expiration`, `discount_extraDetails`) VALUES
(229, 'Lazada', '[GCash Visa] Get P100 off all orders with Lazada coupon', NULL, 'P100 Off - GCash Visa', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(230, 'Lazada', 'Enjoy free shipping on your purchase with Lazada free shipping voucher', NULL, 'Free Shipping', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(231, 'Lazada', '[Daily flash sale] Claim P350 off all orders with Lazada coupon (11AM-12NN!)', NULL, 'P350 Off 11AM-12NN', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(232, 'Lazada', 'Save up to P200 off popular brands with Lazada PH voucher', NULL, 'P200 Off Popular Brands', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(233, 'Lazada', 'Receive 30% off LazBeauty products with Lazada coupon', NULL, '30% Off LazBeauty', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(234, 'Lazada', 'Receive P150 off Garnier products with Lazada voucher', NULL, 'P150 Off Garnier', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(235, 'Lazada', 'Take P80 off Maybelline make up products with Lazada coupon', NULL, 'P80 Off Maybelline', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(236, 'Lazada', 'Grab P100 off BLK Cosmetics with Lazada voucher', NULL, 'P100 Off BLK Cosmetics', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(237, 'Lazada', 'Score 20% off Sace Lady make up with Lazada coupon', NULL, '50% Off Sace Lady', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(238, 'Lazada', '[LazMom] Save 20% off mom & kids essentials with Lazada voucher', NULL, '20% Off LazMom', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(239, 'Lazada', 'Save P555 off Apple products with Lazada coupon', NULL, 'P555 Off Apple Products', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(240, 'Lazada', 'Take P100 off selected Oppo devices with Lazada coupon', NULL, 'P100 Off Oppo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(241, 'Lazada', 'Receive 5% off adidas collection with Lazada voucher', NULL, '5% Off adidas', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(242, 'Lazada', '[Daebak deals] Shop for Korean items and get discounts with Lazada voucher', NULL, 'Daebak Deals', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(243, 'Lazada', 'Collect P1,000 off Panasonic electronics using Lazada voucher', NULL, 'P1,000 Off Panasonic', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(244, 'Lazada', 'Score P250 off Birkenstock footwear with Lazada voucher', NULL, 'P250 Off Birkenstock', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(245, 'Lazada', 'Take P400 off Crocs collection with Lazada voucher', NULL, 'P400 Off Crocs', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(246, 'Lazada', 'Enjoy P100 off Focallure make up with Lazada coupon', NULL, 'P100 Off Focallure', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(247, 'Lazada', 'Save 5% off Vivo devices with Lazada voucher', NULL, '5% Off Vivo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(248, 'Lazada', 'Claim P6,000 off Vivo devices with Lazada voucher', NULL, 'P6,000 Off Vivo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(249, 'Lazada', 'Claim 20% off sitewide orders with foodpanda pro x Lazada voucher', NULL, '20% Off Sitewide', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(250, 'Lazada', '[Maya - Tue] Receive up to P130 off total orders with Lazada coupon', NULL, 'P130 Off - Maya', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(251, 'Lazada', 'Claim P300 off Deli office supplies with Lazada coupon', NULL, 'P300 Off Deli Office', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(252, 'Lazada', 'Get P500 off Tefal products with Lazada coupon', NULL, 'P500 Off Tefal', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(253, 'Lazada', 'Receive 10% off all purchases with Lazada voucher (limited!)⭐', NULL, '10% Off P599', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(254, 'Lazada', '[GCash] Redeem 10% off sitewide orders with this Lazada voucher 🛒🏃💨', NULL, '10% Off - GCash', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(255, 'Lazada', '[GCash Visa] Get P100 off all orders with Lazada coupon', NULL, 'P100 Off - GCash Visa', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(256, 'Lazada', 'Enjoy free shipping on your purchase with Lazada free shipping voucher', NULL, 'Free Shipping', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(257, 'Lazada', '[Daily flash sale] Claim P350 off all orders with Lazada coupon (11AM-12NN!)', NULL, 'P350 Off 11AM-12NN', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(258, 'Lazada', 'Save up to P200 off popular brands with Lazada PH voucher', NULL, 'P200 Off Popular Brands', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(259, 'Lazada', 'Receive 30% off LazBeauty products with Lazada coupon', NULL, '30% Off LazBeauty', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(260, 'Lazada', 'Receive P150 off Garnier products with Lazada voucher', NULL, 'P150 Off Garnier', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(261, 'Lazada', 'Take P80 off Maybelline make up products with Lazada coupon', NULL, 'P80 Off Maybelline', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(262, 'Lazada', 'Grab P100 off BLK Cosmetics with Lazada voucher', NULL, 'P100 Off BLK Cosmetics', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(263, 'Lazada', 'Score 20% off Sace Lady make up with Lazada coupon', NULL, '50% Off Sace Lady', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(264, 'Lazada', '[LazMom] Save 20% off mom & kids essentials with Lazada voucher', NULL, '20% Off LazMom', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(265, 'Lazada', 'Save P555 off Apple products with Lazada coupon', NULL, 'P555 Off Apple Products', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(266, 'Lazada', 'Take P100 off selected Oppo devices with Lazada coupon', NULL, 'P100 Off Oppo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(267, 'Lazada', 'Receive 5% off adidas collection with Lazada voucher', NULL, '5% Off adidas', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(268, 'Lazada', '[Daebak deals] Shop for Korean items and get discounts with Lazada voucher', NULL, 'Daebak Deals', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(269, 'Lazada', 'Collect P1,000 off Panasonic electronics using Lazada voucher', NULL, 'P1,000 Off Panasonic', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(270, 'Lazada', 'Score P250 off Birkenstock footwear with Lazada voucher', NULL, 'P250 Off Birkenstock', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(271, 'Lazada', 'Take P400 off Crocs collection with Lazada voucher', NULL, 'P400 Off Crocs', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(272, 'Lazada', 'Enjoy P100 off Focallure make up with Lazada coupon', NULL, 'P100 Off Focallure', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(273, 'Lazada', 'Save 5% off Vivo devices with Lazada voucher', NULL, '5% Off Vivo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(274, 'Lazada', 'Claim P6,000 off Vivo devices with Lazada voucher', NULL, 'P6,000 Off Vivo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(275, 'Lazada', 'Claim 20% off sitewide orders with foodpanda pro x Lazada voucher', NULL, '20% Off Sitewide', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(276, 'Lazada', '[Maya - Tue] Receive up to P130 off total orders with Lazada coupon', NULL, 'P130 Off - Maya', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(277, 'Lazada', 'Claim P300 off Deli office supplies with Lazada coupon', NULL, 'P300 Off Deli Office', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(278, 'Lazada', 'Get P500 off Tefal products with Lazada coupon', NULL, 'P500 Off Tefal', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(279, 'Lazada', 'Receive 10% off all purchases with Lazada voucher (limited!)⭐', NULL, '10% Off P599', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(280, 'Lazada', '[GCash] Redeem 10% off sitewide orders with this Lazada voucher 🛒🏃💨', NULL, '10% Off - GCash', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(281, 'Lazada', '[GCash Visa] Get P100 off all orders with Lazada coupon', NULL, 'P100 Off - GCash Visa', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(282, 'Lazada', 'Enjoy free shipping on your purchase with Lazada free shipping voucher', NULL, 'Free Shipping', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(283, 'Lazada', '[Daily flash sale] Claim P350 off all orders with Lazada coupon (11AM-12NN!)', NULL, 'P350 Off 11AM-12NN', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(284, 'Lazada', 'Save up to P200 off popular brands with Lazada PH voucher', NULL, 'P200 Off Popular Brands', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(285, 'Lazada', 'Receive 30% off LazBeauty products with Lazada coupon', NULL, '30% Off LazBeauty', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(286, 'Lazada', 'Receive P150 off Garnier products with Lazada voucher', NULL, 'P150 Off Garnier', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(287, 'Lazada', 'Take P80 off Maybelline make up products with Lazada coupon', NULL, 'P80 Off Maybelline', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(288, 'Lazada', 'Grab P100 off BLK Cosmetics with Lazada voucher', NULL, 'P100 Off BLK Cosmetics', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(289, 'Lazada', 'Score 20% off Sace Lady make up with Lazada coupon', NULL, '50% Off Sace Lady', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(290, 'Lazada', '[LazMom] Save 20% off mom & kids essentials with Lazada voucher', NULL, '20% Off LazMom', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(291, 'Lazada', 'Save P555 off Apple products with Lazada coupon', NULL, 'P555 Off Apple Products', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(292, 'Lazada', 'Take P100 off selected Oppo devices with Lazada coupon', NULL, 'P100 Off Oppo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(293, 'Lazada', 'Receive 5% off adidas collection with Lazada voucher', NULL, '5% Off adidas', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(294, 'Lazada', '[Daebak deals] Shop for Korean items and get discounts with Lazada voucher', NULL, 'Daebak Deals', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(295, 'Lazada', 'Collect P1,000 off Panasonic electronics using Lazada voucher', NULL, 'P1,000 Off Panasonic', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(296, 'Lazada', 'Score P250 off Birkenstock footwear with Lazada voucher', NULL, 'P250 Off Birkenstock', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(297, 'Lazada', 'Take P400 off Crocs collection with Lazada voucher', NULL, 'P400 Off Crocs', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(298, 'Lazada', 'Enjoy P100 off Focallure make up with Lazada coupon', NULL, 'P100 Off Focallure', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(299, 'Lazada', 'Save 5% off Vivo devices with Lazada voucher', NULL, '5% Off Vivo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(300, 'Lazada', 'Claim P6,000 off Vivo devices with Lazada voucher', NULL, 'P6,000 Off Vivo', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(301, 'Lazada', 'Claim 20% off sitewide orders with foodpanda pro x Lazada voucher', NULL, '20% Off Sitewide', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(302, 'Lazada', '[Maya - Tue] Receive up to P130 off total orders with Lazada coupon', NULL, 'P130 Off - Maya', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(303, 'Lazada', 'Claim P300 off Deli office supplies with Lazada coupon', NULL, 'P300 Off Deli Office', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(304, 'Lazada', 'Get P500 off Tefal products with Lazada coupon', NULL, 'P500 Off Tefal', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(305, 'Lazada', 'Receive 10% off all purchases with Lazada voucher (limited!)⭐', NULL, '10% Off P599', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio'),
(306, 'Lazada', '[GCash] Redeem 10% off sitewide orders with this Lazada voucher 🛒🏃💨', NULL, '10% Off - GCash', '2023-12-31', 'Discount capped at P150, P500, Existing User, 25 December 2023, For one-time use only & valid from 1st to 11th Dec and 13th to 25th Dec, P2,500, Existing User, 31 December 2023, Valid for one-time use, P1,000, Existing User, 31 December 2023, No limitatio');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(50) NOT NULL,
  `item_desc` varchar(255) DEFAULT NULL,
  `item_img` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `item_name`, `item_desc`, `item_img`) VALUES
(1, 'Logitech G Pro Wireless', 'This is an expensive mouse', '/images/LogitechGProWireless.jpg'),
(2, 'Keychron Q1 Pro', 'This is a keyboard', '/images/KeychronQ1Pro.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `sale_id` int(11) NOT NULL,
  `sale_source` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_price` varchar(255) NOT NULL,
  `item_img` varchar(255) NOT NULL,
  `sale_expiration` date NOT NULL,
  `discount_value` varchar(255) DEFAULT NULL,
  `original_price` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`sale_id`, `sale_source`, `item_name`, `item_price`, `item_img`, `sale_expiration`, `discount_value`, `original_price`) VALUES
(103, 'Lazada', 'Simplus 4L/5L Air Fryer 1300W Electric Fryer Oil Free Non Stick Pan Knob Control Timer Fryer Tools Fries Fryer', '₱869.00', 'https://lzd-img-global.slatic.net/g/p/61f052b0f3377d06586542c53d950897.jpg_188x188q80.jpg_.webp', '2023-12-22', '-69%', '₱2,799.00'),
(104, 'Lazada', 'TV Antenna Indoor HDTV Antenna HD Digital Indoor Amplified 50-Mile Range HDTV Antenna Digital Antenna TV Receiver Aerial HD Flat Design High Gain Indoor Signal Receiver', '₱109.36', 'https://lzd-img-global.slatic.net/g/p/2d29261dc8fb9178ef98a722847cd7af.jpg_188x188q80.jpg_.webp', '2023-12-22', '-63%', '₱299.00'),
(105, 'Lazada', 'Seagloca New Luxury Women Short Wallet Lady Purse with Card Holder', '₱160.65', 'https://lzd-img-global.slatic.net/g/p/937a92aabaa27b353f4b2ae971678910.jpg_188x188q80.jpg_.webp', '2023-12-22', '-60%', '₱399.00'),
(106, 'Lazada', 'exclusive gadgets phones accessories', '₱110.70', 'https://lzd-img-global.slatic.net/g/p/acd175c58b5e2d104d36cb97a8224aed.png_188x188q80.png_.webp', '2023-12-22', '-16%', '₱132.00'),
(107, 'Lazada', 'Waterproof Leather Waist Bag For Men  Phone Bag Waist Bag High Quality Leather Men\'s Waist Bag  with mobile Jogging with leather case card holder wallet hanging key wearing belt special', '₱130.46', 'https://lzd-img-global.slatic.net/g/p/90c1d7e291e5a5d35406a2a0215be9ca.jpg_188x188q80.jpg_.webp', '2023-12-22', '-72%', '₱458.00'),
(108, 'Lazada', 'E-Star Korea Fashion Thick Bottom peep-toe Sandals Casual Simple Shoes For Women-add one size bigger', '₱103.20', 'https://lzd-img-global.slatic.net/g/p/89314f94bff97ac868de6126d73710d9.jpg_188x188q80.jpg_.webp', '2023-12-22', '-78%', '₱479.00'),
(109, 'Lazada', 'Ella Fashion Chest bag waterproof nylon lightweight casual large-capacity travel portable messenger bag Mens Backpack', '₱125.00', 'https://lzd-img-global.slatic.net/g/p/8fedd04fb2e43704dcff5208f6337405.png_188x188q80.png_.webp', '2023-12-22', '-90%', '₱1,299.00'),
(110, 'Lazada', '(Pre-order)Rc Car 1/20 Pvc Remote Control Race Car 2.4 Ghz High Speed Racing Car Toys for Boys 7 to 12 Years Old', '₱184.91', 'https://lzd-img-global.slatic.net/g/p/11b14e1f8cc3f80372e3d8f7e67d3919.jpg_188x188q80.jpg_.webp', '2023-12-22', '-63%', '₱505.00'),
(111, 'Lazada', '🎧【Readystock】 + FREE Shipping 🎧JBL M10 TWS Wireless Headset Bluetooth 5.1 9D Waterproof Microphonejbk jbl m10', '₱190.80', 'https://lzd-img-global.slatic.net/g/p/1c1f12610e971e76a146b03eab0bc7ca.jpg_188x188q80.jpg_.webp', '2023-12-22', '-57%', '₱440.00'),
(112, 'Lazada', '4 In 1 Eyebrow Pencil Waterproof Drawing Eye Brow Long Lasting Easy Color Eyebrow Pen Sweatproof Makeup Cosmetic Tool', '₱110.81', 'https://lzd-img-global.slatic.net/g/p/ebc19bcf0bb71ecae6ff310991bb06d1.jpg_188x188q80.jpg_.webp', '2023-12-22', '-52%', '₱229.00'),
(113, 'Lazada', '5000 Pcs beads for bracelet making set beads set kit with tools diy bracelet kit set beads accessories kit set with lock', '₱171.00', 'https://lzd-img-global.slatic.net/g/p/ddb0e4ee47a7ca70984147777f6de7c1.jpg_188x188q80.jpg_.webp', '2023-12-22', '-66%', '₱500.00'),
(114, 'Lazada', 'ELEGANT FLORAL DESIGN EYELET COTTON DRESS L-XXL FREESIZE ACTUAL PHOTOS', '₱327.45', 'https://lzd-img-global.slatic.net/g/p/2b41cd2535a83ba770bb30bbe83056a3.jpg_188x188q80.jpg_.webp', '2023-12-22', '-14%', '₱379.00'),
(115, 'Lazada', 'Crocs classic tie dye clog for Kids unisex fot summer outdoor', '₱118.43', 'https://lzd-img-global.slatic.net/g/p/b9b8da4e3b603319402125826f88c293.jpg_188x188q80.jpg_.webp', '2023-12-22', '-60%', '₱299.00'),
(116, 'Lazada', 'Sofia - R1S SELFIE STICK WITH TRIPOD STAND AND LED FILL LIGHT BLUETOOTH REMOTE CONTROL FOR MOBILE PHONE', '₱100.40', 'https://lzd-img-global.slatic.net/g/p/9218f5520fc08b11172a0db5b1e51a9b.png_188x188q80.png_.webp', '2023-12-22', '-90%', '₱1,000.00'),
(117, 'Lazada', 'Portable 3 Inch Retro Mini Pocket Game Machine 400 In 1 Gameboy Gamebox Rechargeable Game Player', '₱235.00', 'https://lzd-img-global.slatic.net/g/p/1c0588167822b1d975fe57380e80428e.jpg_188x188q80.jpg_.webp', '2023-12-22', '-52%', '₱485.00'),
(118, 'Lazada', 'Vofox Women Cloth Shoes Slip-On Loafers Shoes Office Casual Rounded Toe Flats Shoes', '₱111.20', 'https://lzd-img-global.slatic.net/g/p/bbcf355c56fabcf2306f187910c51f3b.jpg_188x188q80.jpg_.webp', '2023-12-22', '-74%', '₱435.00'),
(119, 'Lazada', 'Green Moon Foldable Laptop table/mini Desk Study Table', '₱121.25', 'https://lzd-img-global.slatic.net/g/p/23b6c2fe4bd811ef34a8847b0181ed57.jpg_188x188q80.jpg_.webp', '2023-12-22', '-80%', '₱599.00'),
(127, 'Lazada', 'Ella Fashion Chest bag waterproof nylon lightweight casual large-capacity travel portable messenger bag Mens Backpack', '₱125.00', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-90%', '₱1,299.00'),
(128, 'Lazada', '🎧【Readystock】 + FREE Shipping 🎧JBL M10 TWS Wireless Headset Bluetooth 5.1 9D Waterproof Microphonejbk jbl m10', '₱190.80', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-57%', '₱440.00'),
(129, 'Lazada', '4 In 1 Eyebrow Pencil Waterproof Drawing Eye Brow Long Lasting Easy Color Eyebrow Pen Sweatproof Makeup Cosmetic Tool', '₱110.81', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-52%', '₱229.00'),
(130, 'Lazada', 'Crocs classic tie dye clog for Kids unisex fot summer outdoor', '₱118.43', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-60%', '₱299.00'),
(131, 'Lazada', 'Sofia - R1S SELFIE STICK WITH TRIPOD STAND AND LED FILL LIGHT BLUETOOTH REMOTE CONTROL FOR MOBILE PHONE', '₱100.40', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-90%', '₱1,000.00'),
(132, 'Lazada', 'Yaguan Herbal Shampoo - Yaguan Black Brown Dew Shampoo Hair Dye Shampoo 5 Minutes White Hair Turns to Black Hair 500ML', '₱103.60', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-75%', '₱417.00'),
(133, 'Lazada', 'Portable 3 Inch Retro Mini Pocket Game Machine 400 In 1 Gameboy Gamebox Rechargeable Game Player', '₱235.00', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-52%', '₱485.00'),
(134, 'Lazada', 'Girls\' Princess Dress Spring and Autumn One Year Old Baby Girl Dress 2023 New Little Kids Baby Clothes Kids\' Skirt', '₱116.86', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-51%', '₱240.00'),
(135, 'Lazada', 'Vofox Women Cloth Shoes Slip-On Loafers Shoes Office Casual Rounded Toe Flats Shoes', '₱111.20', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-74%', '₱435.00'),
(136, 'Lazada', 'Green Moon Foldable Laptop table/mini Desk Study Table', '₱121.25', '//lzd-img-global.slatic.net/g/tps/tfs/TB11KU2DQY2gK0jSZFgXXc5OFXa-345-345.png', '2023-12-22', '-80%', '₱599.00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  `user_fname` varchar(45) NOT NULL,
  `user_middle` varchar(45) DEFAULT NULL,
  `user_lname` varchar(45) NOT NULL,
  `emailed` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_password`, `user_fname`, `user_middle`, `user_lname`, `emailed`) VALUES
(1, 'admin@gmail.com', 'password', 'admin', NULL, 'last', 0),
(2, 'dduummy1@email.com', 'password', 'Test', 'M', 'last', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `wishlist_id` int(11) NOT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wishlists`
--

INSERT INTO `wishlists` (`wishlist_id`, `item_name`, `user_id`) VALUES
(1, 'Air Fryer', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`discount_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sale_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`wishlist_id`),
  ADD UNIQUE KEY `user_id_2` (`user_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `user_id_3` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=307;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `sale_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `wishlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `wishlists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
