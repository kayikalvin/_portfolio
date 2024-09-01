import reactImage from '../../portfolio/'

const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve the React frontend build files
app.use(express.static(path.join(__dirname, '../client/build')));

// Dummy data for the portfolio
const portfolios = [
    {
        id: 1,
        src: '/assets/portfolio/arrayDestruct.jpg',
        demoUrl: 'https://github.com/kayikalvin/World-homicide-analysis',
        codeUrl: 'https://github.com/kayikalvin/World-homicide-analysis',
        name: 'World Homicide Analysis'
    },
    {
        id: 2,
        src: '/assets/portfolio/reactParallax.jpg',
        demoUrl: 'https://github.com/kayikalvin/Walmart-DataAnalysis',
        codeUrl: 'https://github.com/kayikalvin/Walmart-DataAnalysis',
        name: 'Walmart Sales Analysis'
    },
    {
        id: 3,
        src: '/assets/portfolio/navbar.jpg',
        demoUrl: 'https://github.com/kayikalvin/Udemy-DataAnalysis',
        codeUrl: 'https://github.com/kayikalvin/Udemy-DataAnalysis',
        name: 'Udemy Courses Analysis'
    },
    {
        id: 4,
        src: '/assets/portfolio/reactSmooth.jpg',
        demoUrl: 'https://github.com/kayikalvin/Weather-dataset-Analysis',
        codeUrl: 'https://github.com/kayikalvin/Weather-dataset-Analysis',
        name: 'Weather Data Analysis'
    },
    {
        id: 5,
        src: '/assets/portfolio/installNode.jpg',
        demoUrl: 'https://github.com/kayikalvin/Ultra_Marathon_USA_Analysis',
        codeUrl: 'https://github.com/kayikalvin/Ultra_Marathon_USA_Analysis',
        name: 'USA Ultra Marathon Analysis'
    },
    {
        id: 6,
        src: '/assets/portfolio/reactWeather.jpg',
        demoUrl: 'https://github.com/kayikalvin/diabetespredictor',
        codeUrl: 'https://github.com/kayikalvin/diabetespredictor',
        name: 'Diabetes Predictor App'
    },
];

app.get('/api/projects', (req, res) => {
    res.json(portfolios);
});

// Serve the frontend for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
