var keystone = require('keystone');
var Types = keystone.Field.Types;

var PageBase = require('./PageBase');

var StudioPage = new keystone.List('StudioPage', { inherits: PageBase } );

StudioPage.add({
  text: { type: Types.Html, wysiwyg: true, height: 400,},
  background: { type: Types.Relationship, ref: 'Image'},
  images: { type: Types.Relationship, ref: 'Image', many: true },

});


StudioPage.defaultColumns = 'title, slug';
StudioPage.register();