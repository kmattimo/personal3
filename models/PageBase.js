var keystone = require('keystone');
var Types = keystone.Field.Types;


var PageBase = new keystone.List('PageBase');

PageBase.add({
	name: { type: String, required: true, index: true, initial: true },
  slug: { type: String, unique: true , initial: true },
  //add meta fields in group
  meta: {
    title: {type: String },
    description: { type: Types.Textarea, initial: true },
  }
  // content: { type: Types.Html, wysiwyg: true, height: 400 }
  
});

exports = module.exports = PageBase;

PageBase.defaultColumns = 'title, description';
PageBase.register();