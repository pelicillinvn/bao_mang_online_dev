const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
//const textSearch = require('mongoose-text-search');

const Schema = mongoose.Schema;

const Post = new Schema({
    title: {type: String},
    field: {type: String},
    image: {type: String},
    introduction: {type: String},
    description: {type: String},
    slug: { type: String, slug: "title", unique:true },
    count: {type: Number},
    date: { type: String }
    },
    {timestamps: true}
);
module.exports = mongoose.model('Post', Post)
// Post.plugin(textSearch);
Post.index({ title: 'text'})