# isValidTag
Adds `isValidTag` method to elements, as well as example use that add ol' school `blink` functionality to`<blink>` tags.

Use as simple as:

	if (!document.createElement('blink').isValidTag()) {
		var head = document.head || document.getElementsByTagName("head")[0],
			style = document.createElement("style");
		/* Standard (Mozilla) */
		style.appendChild(document.createTextNode("@keyframes blink { from { opacity: 1; } to { opacity: 0; } }"));
		/* Chrome & Safari */
		style.appendChild(document.createTextNode("@-webkit-keyframes blink { from { opacity: 1; } to { opacity: 0; } }"));
		style.appendChild(document.createTextNode("blink { -webkit-animation: blink 600ms infinite; animation: blink 600ms infinite; text-decoration: blink; }"));
		head.appendChild(style);
	}
