CREATE DATABASE if not exists `pdftron_collaboration`;

USE `pdftron_collaboration`;

/*Table `live_document` */
CREATE TABLE IF NOT EXISTS `live_document` (
  `document_id` VARCHAR(36) PRIMARY KEY UNIQUE,
  `file_name` VARCHAR(255) NOT NULL,
  `created_by` VARCHAR(255) NOT NULL,
  `created_time`  TIMESTAMP NOT NULL DEFAULT NOW()
);

/*Table `annotation` */
CREATE TABLE IF NOT EXISTS `annotation` (
  `annotation_id` VARCHAR(36) PRIMARY KEY UNIQUE,
  `document_id` VARCHAR(36) NOT NULL,
  `xfdf_string` LONGTEXT NOT NULL,
  `created_time`  TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (document_id) REFERENCES live_document(document_id)
);

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON * . * TO 'admin'@'localhost'

-- If table 'annotation' has been created before, please delete all items in table 'annotation' and run this command
-- ALTER TABLE annotation ADD FOREIGN KEY(document_id) REFERENCES live_document(document_id);
