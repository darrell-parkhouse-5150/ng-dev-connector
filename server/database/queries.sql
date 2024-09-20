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