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

create table `online_users`(
    `user_id` int(11) primary key auto_increment,
    `login_time` time not null,
    `user_name` varchar(40) not null
);

create table `groups` (
    `grp_id` int (11) not null,
    `grp_name` varchar(255) not null,
    `grp_bio` text not null,
    `grp_avatar` text not null,
    `grp_admin` int(11) not null,
    `grp_privacy` enum('public', 'private'),
    `grp_created_at` datetime not null
);

create table `grp_invite`(
    `grp_invite_id` int(11) primary key auto_increment,
    `grp_name` int(11) not null,
    `grp_inviter` int (11),
    `grp_invitee` int (11),
    `grp_time` datetime not null
)