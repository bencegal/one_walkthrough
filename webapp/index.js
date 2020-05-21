sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "one_walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});