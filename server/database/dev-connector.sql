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

create table `profile`(
    `profile_id` int(11) primary key auto_increment,
    `user_id` int(11) not null,
    `user_first_name` varchar(30) not null,
    `user_last_name` varchar(30) not null,
    `email` varchar(255) not null,
    `updated_at` datetime not null,
    `created_at` datetime not null
);

-- TODO: finish the component schema

create table `component` (
    `component_id` int(11) primary key auto_increment,
    `component_name` varchar(30) not null,
    `author_name` varchar(40) not null,
    `version` varchar(8),
    `type` enum('react')
)

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
);

create table `social_networks` (
    `social_network_id` int(11) primary key auto_increment,
    `url` varchar(255) not null,
    `user_id` int(11) not null,

    Foreign Key (`user_id`) references `users`(`user_id`)
);

create table `component_post`(
    `component_post_id` int(11) primary key auto_increment,
    `name` varchar(60),
    `version` varchar(5) not null,
    `type` varchar(30) not null,
    `created_at` datetime
);

create index `idx_component_id` on `component_post` (`component_post_id`);
create index `idx_group_id` on `groups` (`grp_id`);

alter table `component_post`
    drop column `user_id`

alter table `component_post`
    add column `author` varchar(50) after name;
alter table `component_post`
    add column `updated_at` datetime after `author`;