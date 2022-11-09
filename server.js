const express = require("express")
const app = express()


app.get('/', (req, res) => {
    res.send(`
         99 bottles of Tree House DIPA on the wall
        </br>
        <a href="/98"> Take one down, pass it around... </a>
    `)
})

app.get('/:bottles', (req, res) => {
    const current = parseInt(req.params.bottles)
    const next = current - 1
    let next_button = `<a href="/${next}"> Take one down, pass it around... </a>`

    if (current === 0) {
        next_button = '<a href="/"> Start the song again. </a>'
    }

    res.send(`
        ${current} bottles of Tree House DIPA on the wall
        </br>
        ${next_button}
    `)
}) // route template


app.listen(3000, () => {
})

/*
app.get('', (req, res) => {}) // route template
*/