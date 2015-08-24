
/* jshint globalstrict: true */
/* global Scenario*/
'use strict';

function Feature(description) {
	this.description = description;
	this.scenarios = [];
}

Feature.prototype.ignoreOther = function(){
	this.simpleRun = true;
	return this;
}

Feature.prototype.scenario = function (description) {
	var scenario = new Scenario(description, this);
	this.scenarios.push(scenario);
	return scenario;
}; 
