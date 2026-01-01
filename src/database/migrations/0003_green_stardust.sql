ALTER TABLE `contact_categories` RENAME TO `contacts_categories`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_contacts_categories` (
	`contact_id` text NOT NULL,
	`category_id` text NOT NULL,
	PRIMARY KEY(`contact_id`, `category_id`),
	FOREIGN KEY (`contact_id`) REFERENCES `contacts`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_contacts_categories`("contact_id", "category_id") SELECT "contact_id", "category_id" FROM `contacts_categories`;--> statement-breakpoint
DROP TABLE `contacts_categories`;--> statement-breakpoint
ALTER TABLE `__new_contacts_categories` RENAME TO `contacts_categories`;--> statement-breakpoint
PRAGMA foreign_keys=ON;