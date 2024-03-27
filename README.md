# <p align="center">trakr - frontend</p>

A full-stack MERN app that helps you keep track of important habits and tasks.

## Table of Contents

1. [Technologies Used](#technologies)
2. [Description](#description)
3. [Setup / Installation Requirements](#setup)
4. [Known Bugs](#bugs)
5. [License](#license)
6. [Contact Information](#contact)

## Technologies Used <a id="technologies"></a>

- HTML / CSS / Javascript
- React / [Vite.js](https://vitejs.dev/)
- [ChakraUI](https://chakra-ui.com/)
- [Recharts](https://recharts.org/en-US/)
- [React Context API](https://react.dev/learn/managing-state#scaling-up-with-reducer-and-context)
- [Fitbit API](https://www.fitbit.com/dev)

## Description <a id="description"></a>

This frontend displays content for the backend of [trakr - backend](https://github.com/phil-curran/capstone-backend). This interface is built with React, ChakraUI, and Recharts.

## Project Setup / Installation Instructions <a id="setup"></a>

### Clone the project

Clone this project: <code>git clone [https://github.com/phil-curran/SBA320H](https://github.com/phil-curran/SBA320H)</code>

### Install Dependencies

From the root directory, run: <code>npm i</code>

### Update example.env file

Rename <code>example.env</code> to <code>.env</code> and replace " json web token hash " with an actual json web token hash.

### Run the project

From the root directory, run: <code>npm run dev</code>

## Known Bugs <a id="bugs"></a>

- The app is not currently responsive. It is best viewed on a desktop or tablet.
- Issues with router navigation and redirects after login / registration / logout.
- Issues with auto update of current checklist / date not functioning.

## Roadmap

- Implement OAuth for fetching data from Fitbit API so it can be done realtime.

## License <a id="license"></a>

[MIT License](https://opensource.org/licenses/MIT) © 2024

## Contact <a id="contact"></a>

Phil Curran [pecurran@outlook.com](mailto:pecurran@outlook.com) | [LinkedIn](https://www.linkedin.com/in/philcurran/) | [GitHub](https://github.com/phil-curran)
