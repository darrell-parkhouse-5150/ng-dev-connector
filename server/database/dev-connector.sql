create database `dev_connector`;
use `dev_connector`;



create table `users` (
    `user_id` int(11) primary key auto_increment,
    `name` varchar(40) not null,
    `pass` varchar(60) not null,
    `email` varchar(255) not null,
    `avatar_url` varchar(244) not null,
    `updated_at` datetime,
    `created_at` datetime    
);