var keystone = require('keystone');
var Types = keystone.Field.Types;


var Settings = new keystone.List('Settings', {
  nocreate: true,
  nodelete: true,
});

Settings.add({
	name: { type: String, required: true, index: true, initial: true },
	analytics: { type: Types.Html, wysiwyg: false },
  particleCount: { type: Number, initial: 300 },
  
  personal: {
    resume: { types: Types.Url }, 
    message: { types: Types.Html, wysiwyg: true },
  },

});


Settings.defaultColumns = 'name';
Settings.register();