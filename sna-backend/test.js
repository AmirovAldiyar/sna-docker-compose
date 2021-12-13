const mongoose = require('mongoose');
const password = process.env.PASSWORD
mongoose.connect(`mongodb+srv://admin:${password}@cluster0.hp5f3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

const Text = mongoose.model('Texts', { content: String });
const Post = mongoose.model('Posts', { title: String, content: String, date: Date})

Post.deleteOne({title: "First Post"}).then()
Post.deleteOne({title: "Test"}).then()