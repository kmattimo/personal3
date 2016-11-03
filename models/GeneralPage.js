var keystone = require('keystone');
var Types = keystone.Field.Types;

var PageBase = require('./PageBase');

var GeneralPage = new keystone.List('GeneralPage', { inherits: PageBase } );

GeneralPage.register();