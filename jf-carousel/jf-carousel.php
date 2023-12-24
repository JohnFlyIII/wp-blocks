<?php
/**
 * Plugin Name:       Jfly-carousel
 * Plugin URI:        https://johnfly.com/projects/wpblocks/carousel
 * Description:       Simple dynamic carousel control to show reactjs integration
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            John Fly III
 * License:           MIT
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       jf-carousel
 *
 * @package           jfly
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function jf_carousel_jf_carousel_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'jf_carousel_jf_carousel_block_init' );
