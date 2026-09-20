CREATE TABLE IF NOT EXISTS `fs_outfitbag_schema` (
    `name` VARCHAR(64) NOT NULL,
    `version` INT UNSIGNED NOT NULL,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fs_outfitbag_definitions` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `definition_key` VARCHAR(64) NOT NULL,
    `label` VARCHAR(96) NOT NULL,
    `activation_type` VARCHAR(16) NOT NULL,
    `item_name` VARCHAR(96) NULL,
    `prop_model` VARCHAR(96) NOT NULL,
    `capacity` SMALLINT UNSIGNED NOT NULL DEFAULT 5,
    `unique_storage` TINYINT(1) NOT NULL DEFAULT 1,
    `enabled` TINYINT(1) NOT NULL DEFAULT 1,
    `rules` LONGTEXT NULL,
    `revision` INT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uq_fs_outfitbag_definition_key` (`definition_key`),
    KEY `idx_fs_outfitbag_definitions_enabled` (`enabled`, `activation_type`),
    KEY `idx_fs_outfitbag_definitions_item` (`item_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fs_outfitbag_bags` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `bag_uid` CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
    `definition_id` BIGINT UNSIGNED NOT NULL,
    `owner_identifier` VARCHAR(128) NOT NULL,
    `character_identifier` VARCHAR(128) NULL,
    `state` VARCHAR(20) NOT NULL DEFAULT 'stored',
    `display_name` VARCHAR(96) NULL,
    `metadata` LONGTEXT NULL,
    `revision` INT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `last_used_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uq_fs_outfitbag_bag_uid` (`bag_uid`),
    KEY `idx_fs_outfitbag_bags_owner` (`owner_identifier`, `character_identifier`, `state`),
    KEY `idx_fs_outfitbag_bags_definition` (`definition_id`, `state`),
    CONSTRAINT `fk_fs_outfitbag_bags_definition` FOREIGN KEY (`definition_id`) REFERENCES `fs_outfitbag_definitions` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fs_outfitbag_outfits` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `bag_id` BIGINT UNSIGNED NOT NULL,
    `slot` SMALLINT UNSIGNED NOT NULL,
    `name` VARCHAR(64) NOT NULL,
    `player_model` BIGINT NOT NULL,
    `appearance` MEDIUMTEXT NOT NULL,
    `favorite` TINYINT(1) NOT NULL DEFAULT 0,
    `created_by` VARCHAR(128) NULL,
    `revision` INT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uq_fs_outfitbag_outfit_slot` (`bag_id`, `slot`),
    KEY `idx_fs_outfitbag_outfits_recent` (`bag_id`, `updated_at`),
    CONSTRAINT `fk_fs_outfitbag_outfits_bag` FOREIGN KEY (`bag_id`) REFERENCES `fs_outfitbag_bags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fs_outfitbag_access` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `bag_id` BIGINT UNSIGNED NOT NULL,
    `subject_type` VARCHAR(20) NOT NULL,
    `subject_value` VARCHAR(128) NOT NULL,
    `minimum_grade` INT NOT NULL DEFAULT 0,
    `permissions` INT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uq_fs_outfitbag_access_subject` (`bag_id`, `subject_type`, `subject_value`),
    KEY `idx_fs_outfitbag_access_lookup` (`subject_type`, `subject_value`, `minimum_grade`),
    CONSTRAINT `fk_fs_outfitbag_access_bag` FOREIGN KEY (`bag_id`) REFERENCES `fs_outfitbag_bags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fs_outfitbag_placements` (
    `bag_id` BIGINT UNSIGNED NOT NULL,
    `placed_by` VARCHAR(128) NOT NULL,
    `network_id` INT UNSIGNED NULL,
    `server_session` VARCHAR(40) CHARACTER SET ascii COLLATE ascii_bin NULL,
    `routing_bucket` INT NOT NULL DEFAULT 0,
    `x` DOUBLE NOT NULL,
    `y` DOUBLE NOT NULL,
    `z` DOUBLE NOT NULL,
    `heading` FLOAT NOT NULL DEFAULT 0,
    `expires_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`bag_id`),
    KEY `idx_fs_outfitbag_placements_expiry` (`expires_at`),
    KEY `idx_fs_outfitbag_placements_bucket` (`routing_bucket`),
    CONSTRAINT `fk_fs_outfitbag_placements_bag` FOREIGN KEY (`bag_id`) REFERENCES `fs_outfitbag_bags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fs_outfitbag_locations` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `definition_id` BIGINT UNSIGNED NOT NULL,
    `location_key` VARCHAR(64) NOT NULL,
    `routing_bucket` INT NOT NULL DEFAULT 0,
    `x` DOUBLE NOT NULL,
    `y` DOUBLE NOT NULL,
    `z` DOUBLE NOT NULL,
    `heading` FLOAT NOT NULL DEFAULT 0,
    `access_policy` LONGTEXT NULL,
    `enabled` TINYINT(1) NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uq_fs_outfitbag_location_key` (`location_key`),
    KEY `idx_fs_outfitbag_locations_definition` (`definition_id`, `enabled`),
    KEY `idx_fs_outfitbag_locations_bucket` (`routing_bucket`, `enabled`),
    CONSTRAINT `fk_fs_outfitbag_locations_definition` FOREIGN KEY (`definition_id`) REFERENCES `fs_outfitbag_definitions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fs_outfitbag_presets` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `definition_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(64) NOT NULL,
    `player_model` BIGINT NOT NULL,
    `appearance` MEDIUMTEXT NOT NULL,
    `access_policy` LONGTEXT NULL,
    `sort_order` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `enabled` TINYINT(1) NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_fs_outfitbag_presets_definition` (`definition_id`, `enabled`, `sort_order`),
    CONSTRAINT `fk_fs_outfitbag_presets_definition` FOREIGN KEY (`definition_id`) REFERENCES `fs_outfitbag_definitions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fs_outfitbag_job_bags` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(96) NOT NULL,
    `prop_model` VARCHAR(96) NOT NULL,
    `x` DOUBLE NOT NULL,
    `y` DOUBLE NOT NULL,
    `z` DOUBLE NOT NULL,
    `heading` FLOAT NOT NULL DEFAULT 0,
    `routing_bucket` INT UNSIGNED NOT NULL DEFAULT 0,
    `job_name` VARCHAR(64) NOT NULL DEFAULT '',
    `minimum_grade` INT UNSIGNED NOT NULL DEFAULT 0,
    `access_policy` MEDIUMTEXT NULL,
    `enabled` TINYINT(1) NOT NULL DEFAULT 1,
    `outfits` MEDIUMTEXT NOT NULL,
    `revision` INT UNSIGNED NOT NULL DEFAULT 1,
    PRIMARY KEY (`id`),
    KEY `idx_fs_job_bags_enabled` (`enabled`, `routing_bucket`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `fs_outfitbag_schema` (`name`, `version`) VALUES ('core', 2)
ON DUPLICATE KEY UPDATE `version` = GREATEST(`version`, 2);
