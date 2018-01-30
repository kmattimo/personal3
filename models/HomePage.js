var keystone = require('keystone');
var Types = keystone.Field.Types;

var PageBase = require('./PageBase');

var HomePage = new keystone.List('HomePage', { inherits: PageBase } );

HomePage.add({
	// images: { type: Types.CloudinaryImages },
  content: {
       brief: { type: Types.Textarea, wysiwyg: true, height: 150, initial: true },
       extended: { type: Types.Html, wysiwyg: true, height: 400 }
   },
	 imageLeft: { type: Types.Relationship, ref: 'Image' },
	 imageRight: { type: Types.Relationship, ref: 'Image' },
	 

});


HomePage.defaultColumns = 'title, slug';
HomePage.register();