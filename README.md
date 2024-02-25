# Getting Started with Create React App
In the project directory, you can run:

### `npm start`

## Create Project 

To start a new Create React App project with TypeScript, you can run:

`npx create-react-app client`

## Install tailwind css

`npm install -D tailwindcss`
`npx tailwindcss init`

update the App.css as follows :

@tailwind base;
@tailwind components;
@tailwind utilities;

update the tailwind.config.js as follows : 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily : {
        'main-font' : ['poppins', 'sans-serif'],
      }
    },
    screens: {
      '3xs': '320px',
      '2xs': '420px',
      xs: '520px',
      sm: '640px',
      md: '768px',
      '2md': '920px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  plugins: [],
};

## Router
React Router

`npm i react-router-dom`

App.tsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

npm i express dotenv

npm i nodemon

npm i concurrently

npm i morgan

<!-- npm i nanoid -->

npm i mongoose

npm install mongodb

npm i express-async-errors

npm i http-status-codes

npm i express-validator

npm install react-redux

npm i axios

npm i react-icons

npm i styled-components

npm i bcryptjs

npm i cookie-parser

npm i jsonwebtoken

npm i dayjs