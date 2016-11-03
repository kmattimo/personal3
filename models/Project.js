var keystone = require('keystone');
var Types = keystone.Field.Types;


var Project = new keystone.List('Project');

Project.add({
	title: { type: String, required: true, index: true, initial: true },
  slug: {type: String, required: true, unique: true , initial: true},
	image: { type: Types.CloudinaryImage },
  content: {
       brief: { type: Types.Textarea, wysiwyg: true, height: 150, initial: true },
       extended: { type: Types.Html, wysiwyg: true, height: 400 }
   }

});


Project.defaultColumns = 'title, slug';
Project.register();