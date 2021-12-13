const express = require('express')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

function parsePhrases(rawString) {
    const entries = rawString.split('\r\n')
    const parsedEntries = entries.map(p => {
        const splited = p.split('@')
        return {
            citation: splited[0],
            author: splited[1]
        }
    })
    return parsedEntries
}

const file = fs.readFileSync('./phrases.txt', 'utf8')
const phrases = parsePhrases(file)

function getRandomPhrase() {
    max = Math.floor(phrases.length);
    return phrases[Math.floor(Math.random() * max)]; //Максимум не включается, минимум включается
}

app.use(express.json())

app.get('/v1/randomtext', cors(), (req, res) => {
    res.send(getRandomPhrase())
})

app.listen(port, () => {
    console.log(`Example app listening with port ${port}`)
})