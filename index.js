const express = require('express');
const chalk = require('chalk');
let app = express();
var PORT = 3000;
if(PORT !== 3000) {
    throw new TypeError('PORT IS NOT 3000');
}
app.listen(PORT, () => {
    console.log(chalk.cyan('SERVER STARTED'));
})
app.get('/', (req, res) => {
    res.send('<h1>PROJECTS<h1>');
    res.send('<h3>/password-gen<h3>')
})
app.get('/password-gen', (req, res) => {
    res.sendFile(__dirname + "/Password-Generator/web/main.html");
    
})
app.use(express.static(__dirname + '/Password-Generator/web'));
