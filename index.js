const express = require('express')

const techRouter = require('./routes/tech.routes')
const employeesRouter = require('./routes/employees.routes')
const providersRouter = require('./routes/providers.routes')
const moveController = require('./routes/move.routes')
const repairController = require('./routes/repair.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', techRouter)
app.use('/api', employeesRouter)
app.use('/api', providersRouter)
app.use('/api', moveController)
app.use('/api', repairController)

app.listen(PORT, () => console.log('server started'))
