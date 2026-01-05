import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;
let users: any[] = [];
// This allows the server to understand JSON sent from your Vue app
app.use(express.json());
app.use(cors());

app.get('/status', (req,res )=>{
     res.send('server is okay');
})

app.get('/profile',(req,res)=>{
    res.json({name: 'zyn', role: 'web dev'});
});

app.get('/skills', (req,res)=> {
    res.json(['intermediate','beginner'])
});

app.get('/greet/:name',(req,res)=>{
    const userName = req.params.name
    res.send(`Hello, ${userName}. Welcome back`)
});

app.post('/signup', (req,res)=>{
    const newUser = req.body;

    users.push(newUser)
    console.log('Current users on server', users)

    res.json({message: 'User saved successfully', user: newUser})

});


app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
})