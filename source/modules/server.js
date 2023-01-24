const port = process.env.PORT || 7003
const start = () => (console.log(`Starting server =>  http://localhost:${port}/snake`))

module.exports = {port, start}