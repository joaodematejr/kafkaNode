import express from 'express'

const router = express.Router()

router.post('/microservices', async(req, res) => {
    const msg = {
        user: {
            name: 'John Doe',
            email: 'john@example.com',
        },
        course: 'Node.js',
        grade: 'A',
    }
    await req.producer.send({
        topic: 'issue-certificate',
        messages: [{
            value: JSON.stringify(msg),
        }, ],
    })
    return res.json({ message: 'Hello World' })
})

export default router