<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cms63_g3' );

/** MySQL database username */
define( 'DB_USER', 'cms63_g3' );

/** MySQL database password */
define( 'DB_PASSWORD', '5767968' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^:Z8)uu#dcb%vmk!K+Z:oOniA}d/e}<)nv_n:R$5XsYKi6I|wyM/u&Oj`Ya]OrT}' );
define( 'SECURE_AUTH_KEY',  '(,tCMZeGB~{{u:^-.)~zlL +r}w6HFl)uU#}%BDCe Qf(S%S}W B{er,n@7EL5X3' );
define( 'LOGGED_IN_KEY',    '4DDlf.h;tilm?hV~tw=-dp?dK!`4&te]FJ=g/_yu$&%UC/?|Eyo1upt4sUL() p@' );
define( 'NONCE_KEY',        'YmnAd,j^%3tI*CCXVR<S )|~ O7>>v ]C1PeFdM(0/?k?{t<8FJod}mPhRuAJ>NR' );
define( 'AUTH_SALT',        'Nk<5lB@/^@d,}ny|wxcpK?<ihe.Ja/.w3<UW+Wk pzw>tH[]{Hk*oLyNwNun/7/L' );
define( 'SECURE_AUTH_SALT', '%~x!6}He~)UeH$2<FkKf?J$YWwm9sE;YsOf+t{yN*{:uflXlpe8B1 u|pA]/xX(o' );
define( 'LOGGED_IN_SALT',   ':~JxME~R2O[/2`G8hMiasS%]a]w9mHxby .{D_h,5.lUMgqE_NOBYY_Na=+Y_[:F' );
define( 'NONCE_SALT',       '5a[U QzT3(_%c|(.aMV%FjNbf6L14;93b2Kph!$c/LO@cY:8+l)skw0MEu#[FY#&' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
