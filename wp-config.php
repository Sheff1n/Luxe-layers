<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'luxe_layers' );

/** Database username */
define( 'DB_USER', 'sheffin' );

/** Database password */
define( 'DB_PASSWORD', 'Sheffin0#' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']fF+^=0fm,4ajT;BN|KVt1$+Xe<_4~-?xw&*bEeDi16%F%K:;MSiCY7]XeEW|&;I' );
define( 'SECURE_AUTH_KEY',  'mc,AOTfs8FF?]._l6%+@-/%^HK/|A:$/JL`Jh6!7f*tra>Q^q=s|;,v%mLL&)Mt1' );
define( 'LOGGED_IN_KEY',    'Uc#-7RH!KH9d9QL-l>KUjti?c6{|$Zp)%R;2umP)a BoDG<|2`*B@UCD3Z9Q&r$T' );
define( 'NONCE_KEY',        '^7W[WAT>z!i:M1!tqQQ0wjL0X]T][-EIU!4Fxi2N0zPczE1I]mzjl{$MZ)$#l;PS' );
define( 'AUTH_SALT',        '(kvQ2ov*o(w&/r7oqKK%I+?&Lbu.IJd1ARm5dJl68NQP!Lv:{nU73^j@|+RQEB:z' );
define( 'SECURE_AUTH_SALT', 'cxoGGh5>}Gh~<T].wkS^8T|CNrVLD$:np<H*Wf0g@ I+Wkzjc2!-;>4-uRy8J7z]' );
define( 'LOGGED_IN_SALT',   'oCyxq1@Gx_(W)&i@CheMAc$?oTdNGYXMz.WlS|5]YJ;<Kn3; aa8lF38W6>hni8>' );
define( 'NONCE_SALT',       'BzD.bY0bJNP.E?ekeUP)ZK@r*f8M^;<9ILKDBvj>T?DD>[`Ef{$1Y5Fw+Ir~5Z6v' );

/**#@-*/

/**
 * WordPress database table prefix.
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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
