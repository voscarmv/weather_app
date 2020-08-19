# Weather App

> An app that tells the weather. It comes equipped with an auto-complete search bar to find your city!

![image](https://user-images.githubusercontent.com/2739245/90542840-5c43d400-e14a-11ea-9bd7-85b52725822b.png)

The `navbar.js` autocomplete interface uses a novel `async` call stacking algorithm to prevent the overlapping of Teleport API responses.

## Live Demo

Check out the live demo [here](https://voscarmv.github.io/weather_app/).

### Prerequisites
- Install Node JS. ([NodeJS Documentation](https://nodejs.org/en/docs/)) 
- Install Webpack. ([Webpack Documentation](https://webpack.js.org/guides/installation/)) 

### Install
- Clone this repository in your terminal using **git clone** command.
- Enter the repo directory.
- Run `npm install && npm run build` in your terminal.

### Usage
- Run `npm run server` in your terminal.
- Open **http://localhost:8080** in your browser.

## Author

**Oscar Mier**
- Github: [@voscarmv](https://github.com/voscarmv)
- Twitter: [@voscarmv](https://twitter.com/voscarmv)
- Linkedin: [Oscar Mier](https://www.linkedin.com/in/oscar-mier-072984196/) 

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Thanks to [OpenWeather](https://openweathermap.org/) for the API 
- Thanks to [Teleport](http://developers.teleport.org/) for the city data.
- Thanks to [Microverse](www.microverse.org) for the opportunity.
- Thanks to [The Odin Project](https://www.theodinproject.com/) for the guidance.

## Future features and improvements

- A better UX and design for the page.
- Instead of a sequential async call stack for `navbar.js`, implement a timeout-based approach as to not overwhelm the Telepor API with requests when typing a city name.

## 📝 License

This project is [MIT](./LICENSE) licensed.
