const Joi = require('joi');

const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:1 , name:'Telugu'},
    {id:2 , name:'English'},
    {id:3 , name:'Hindi'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The requested course is not available in the system');
    res.send(course);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
    //res.send(req.query); // this is used for query string  like sortby=name
});

app.post('/api/courses', (req, res) => {
    
    const { error} = validateSchema(req.body);

    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    } 

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//To update
app.put('/api/courses/:id', (req,res) => {
    //check whether the course is exisiting or not
    //If do not exist, then 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The requested course is not available in the system');

    //validate the input
    //if Valid, return 400 - bad request
    // const result = validateSchema(req.body);
    const { error } = validateSchema(req.body);

    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    //update the course
    //Return the updated course
    course.name = req.body.name;
    res.send(course);
});

const port = process.env.PORT || 3000 ;
app.listen(port, () => console.log(`App is listening on port: ${port}`));

function validateSchema(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(course, schema);
    console.log(`result: ${result}`);
    return result
}