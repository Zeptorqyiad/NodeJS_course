const comments = require("./data")

function getHTML(req, res) {
    res.statusCode = 200
    res.setHeader("Content-type", "text/html")
    res.write("<html><body><div>")
    res.write("<h1>Greetings from the HTTP server!</h1>")
    res.write("</div></body></html>")
    res.end()
}
function getText(req, res) {
    res.statusCode = 200
    res.setHeader("Content-type", "text/plain")
    res.end("This is plain text")
}
function getComments(req, res) {
    res.statusCode = 200
    res.setHeader("Content-type", "application/json")
    res.end(JSON.stringify(comments))
}
function handleNotFound(req, res) {
    res.statusCode = 404
    res.setHeader("Content-type", "text/html")
    res.end("<h1>Page not found!</h1>")
}
function postComments(req, res) {
    res.setHeader("Content-type", "text/plain")

    if (req.headers['content-type'] === 'application/json') {
        let commentJSON = ''
    
        req.on('data', (chunk) => commentJSON += chunk)
    
        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON))
                res.statusCode = 200
                res.end('Comment data was received')
            } catch (error) {
                res.statusCode = 400
                res.end('Invalid JSON')
            }
        })
    } else {
        res.statusCode = 400
        res.end('Data must be in the JSON format')
    }
}

module.exports = {
    getHTML,
    getText,
    getComments,
    postComments,
    handleNotFound,
}
