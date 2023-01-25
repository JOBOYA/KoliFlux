# Real Estate Ads Project

This project uses the real estate-leboncoin API to retrieve real estate ads and display them on your site. The technologies used are HTML, CSS, JavaScript and the Tailwind CSS framework.
Prerequisites

     Have an account on RapidAPI to retrieve your API key

# Facility

     Clone the repository with the git clone command https://github.com/JOBOYA/Koliflux.git
     Download dotenv package using npm or yarn
     Create an .env file in the root of the project and set your environment variables there:

X_RAPIDAPI_KEY=YOUR_API_KEY
X_RAPIDAPI_HOST=immobilier-leboncoin.p.rapidapi.com

# Use

     In your JavaScript file, include the following line to load environment variables:

require('dotenv').config();

     Use environment variables to make API calls:
`
const options = {
     method: 'GET',
     headers: {
         'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
         'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
     }
};
`
     Launch a local server (for example with Live Server) to view real estate ads

