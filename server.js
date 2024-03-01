import express from "express";

const app = express();

// STATIC ASSET use To connect frontend and backend in bad manner
// app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'this is an another joke'
        },
        {
            id: 3,
            title: 'third joke',
            content: 'this is a third joke'
        },
        {
            id: 4,
            title: 'fourth joke',
            content: 'this is a fourth joke'
        },
        {
            id: 5,
            title: 'fifth joke',
            content: 'this is a fifth joke'
        },
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server at localhost: ${port}`)
})