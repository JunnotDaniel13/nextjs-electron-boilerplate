CREATE TABLE `state` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(255) NOT NULL,
	`code` text(2) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `state_name_unique` ON `state` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `state_code_unique` ON `state` (`code`);