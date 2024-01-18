/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { createRoot } from "@wordpress/element";
import { AtButton, Carousel } from "@johnflyiii/jf-components";
import "@johnflyiii/jf-components/dist/style.css";

const slides = [
	{
		slideUrl: "https://picsum.photos/id/1018/1000/600/",
		altText: "First slide",
	},
	{
		slideUrl: "https://picsum.photos/id/1015/1000/600/",
		altText: "Second slide",
	},
	{
		slideUrl: "https://picsum.photos/id/1019/1000/600/",
		altText: "Third slide",
	},
];

function MyFirstApp() {
	return (
		<div>
			<p>This is in view.js</p>
			<AtButton label="Button!" variant="PRIMARY"></AtButton>
			<Carousel
				placeholder="My Carousel"
				slides={slides}
				maxWidth="max-w-4xl"
				maxHeight="max-h-96"
			></Carousel>
		</div>
	);
}

window.addEventListener(
	"load",
	function () {
		const rootDomElement = document.getElementById("my-custom-gutenberg-app");
		const root = createRoot(rootDomElement);
		root.render(<MyFirstApp></MyFirstApp>);
	},
	false,
);
