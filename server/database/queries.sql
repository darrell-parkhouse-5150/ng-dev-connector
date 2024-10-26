use `dev_connector`;
insert into `users` (`user_id`, `name`, `pass`, `email`, `avatar_url`, `updated_at`, `created_at`)
    values (null, 'Joseph Jones', 'pass1234', 'jj@gmail.com', 'assets/avatar', null, current_timestamp);
insert into `users` (`user_id`, `name`, `pass`, `email`, `avatar_url`, `updated_at`, `created_at`)
    values (null, 'Molly Cooper', 'pass1234', 'mc@gmail.com', 'assets/avatar', null, current_timestamp);
insert into `users` (`user_id`, `name`, `pass`, `email`, `avatar_url`, `updated_at`, `created_at`)
    values (null, 'Darrell Parkhouse Sr', 'pass1234', 'ds@gmail.com', 'assets/avatar', null, current_timestamp);
insert into `users` (`user_id`, `name`, `pass`, `email`, `avatar_url`, `updated_at`, `created_at`)
    values (null, 'Sue Watkins', 'pass1234', 'sw@gmail.com', 'assets/avatar', null, current_timestamp);
insert into `users` (`user_id`, `name`, `pass`, `email`, `avatar_url`, `updated_at`, `created_at`)
    values (null, 'cassidy trim', 'pass1234', 'ct@gmail.com', 'assets/avatar', null, current_timestamp);

update `users` set `name` = 'Molly Parkhouse' where `users`.`user_id` = 3

insert into `online_users` (`user_id`, `login_time`, `user_name`) 
    values (null, current_time, 'Darrell Parkhouse');

insert into `online_users` (`user_id`, `login_time`, `user_name`)
    values (null, CURRENT_TIME, 'cassidy trim');
insert into `online_users` (`user_id`, `login_time`, `user_name`) 
    values (null, current_time, 'Joeph Jones');
insert into `online_users` (`user_id`, `login_time`, `user_name`) 
    values (null, current_time, 'Molly cooper');

select ou.user_id, 
       ou.login_time, 
       ou.user_name 
from `online_users` ou;

select * from `users`;
update `online_users` set `user_id` = '1' where `online_users`.`user_id` = 2;
update `online_users` set `user_id` = '4' where `online_users`.`user_id` = 5;


delete from `users`
where user_id=2;

delete from `online_users`
where user_name='Joeph Jones'
and user_id=3;

while high_value_customers as (
	select customer_id
	from orders
	where total_amount > 1000
)
select *
from customer_id
where customer_id in (
	select customer_id
	from high_value_customers

--? for post-meta componemt
select
	p.post_id,
	count(distinct l.like_id) as likes_count,
	count(distinct s.share_id) as shared_count,
	count(c.comment_id) as comments_count,
	count(distinct v.view_id) as views_count

from posts p
left join
	likes l = p.post_id = l.post_id
right join
	shares s = p.post_id = s.post_id;

--? grab the version of the component
select c.version 
from `components` c 
where c.version > 0.0.3

--? search the component table for the name column
select c.name
from `components` c

UPDATE `component_post` SET `updated_at` = '2024-10-05 09:13:26', `style_loc` = '130', `structure_loc` = '60', `logic_loc` = '140' WHERE `component_post`.`component_post_id` = 1; 

SELECT * FROM component_post 

alter  table component_post
	add column `total_loc` int(9) not null after `logic_loc`;

-- 14ms
with component_summary as (
    select
        cp.name,
        count (cp.component_post_id) as total_components,
        sum(style_loc + structure_loc + logic_loc) as total_line_count
    from component_post cp
)
select  
    total_components, 
    total_line_count
from 
    component_summary

select *, sum(style_loc + structure_loc + logic_loc) from `component_post`, 

insert into `component_post` (`component_post_id`, `name`, `author`, `updated_at`, `version`, `style_loc`, `structure_loc`, `logic_loc`, `total_loc`, `type`, `created_at`) 
VALUES (NULL, 'login form', 'darrell parkhouse', NULL, '0.2.1', '321', '130', '300', '751', 'react', '2024-10-05 10:14:30'); 
insert into `component_post` (`component_post_id`, `name`, `author`, `updated_at`, `version`, `style_loc`, `structure_loc`, `logic_loc`, `total_loc`, `type`, `created_at`) 
VALUES (NULL, 'movie form', 'darrell parkhouse', NULL, '3.2.1', '1200', '3130', '2300', '6630', 'react', '2024-10-05 10:14:30'); 

select * from component_post

UPDATE `component_post` SET `total_loc` = '3751' WHERE `component_post`.`component_post_id` = 5; 

UPDATE `component_post` SET `version` = '1,0.4' WHERE `component_post`.`component_post_id` = 2;
use `dev_connector`;
update `component_post` set `version`='1.0.4' where `component_post`.`component_post_id`= 2;

select
    c.version,
    c.component_post_id,
    c.author,
    c.name
from 
    `component_post` c
where
    c.author = 'darrell'

select c.* from `component_post` c

