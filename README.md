# <p align="center">trakr - frontend</p>

Like weather.com, but better, and without the annoying ads.

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
- [React Router](https://reactrouter.com/en/main)
- [Chakra UI](https://chakra-ui.com/)
- [OpenWeather API](https://openweathermap.org/api/one-call-3)

## Description <a id="description"></a>

Like weather,com, but without all of the annoying ads / tracking..

## Views

Current Weather:
![alt text](./public/now.png)

Hourly Forecast:
![alt text](./public/hourly.png)

10-day Forecast:
![alt text](./public/10-day.png)

## Project Setup / Installation Instructions <a id="setup"></a>

### Get an API KEY from OpenWeather

https://openweathermap.org/api/one-call-3

### Clone the project

Clone this project: <code>git clone [https://github.com/phil-curran/SBA320H](https://github.com/phil-curran/SBA320H)</code>

### Install Dependencies

From the root directory, run: <code>npm i</code>

### Update example.env file

Rename <code>example.env</code> to <code>.env</code> and replace " Your API Key Here. " with your actual API Key from OpenWeather.

### Run the project

From the root directory, run: <code>npm run dev</code>

## Known Bugs <a id="bugs"></a>

None at this time.

## Roadmap

- Implement Google's [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) to allow for custom location selection
- Pin favorite locations to toolbar with localStorage
- Add a modal component that lets users store their api key in localStorage
- UI improvements
- Update Hourly section to show day / date break between days.
- More custom icons

## License <a id="license"></a>

[MIT License](https://opensource.org/licenses/MIT) © 2024

## Contact <a id="contact"></a>

Phil Curran [pecurran@outlook.com](mailto:pecurran@outlook.com) | [LinkedIn](https://www.linkedin.com/in/philcurran/) | [GitHub](https://github.com/phil-curran)
