function isValidTag(b) {
	if (this.tagName) {
		var c = "acronym applet basefont bgsound big blink center dir font frame frameset hgroup isindex listing marquee multicol nextid nobr noembed noframes plaintext spacer strike tt xmp".split(" "),
			a = this.tagName;
		return a.match(/[^a-zA-Z0-9]/) ? !1 : -1 !== b && -1 !== c.indexOf(a.toLowerCase()) ? b || !1 : "[object HTMLUnknownElement]" !== Object.prototype.toString.call(document.createElement(a))
	}
	return !1
}
Object.defineProperty && !Element.prototype.hasOwnProperty("isValidTag") ? Object.defineProperty(Element.prototype, "isValidTag", { value: isValidTag }) : Element.prototype.isValidTag = isValidTag;
