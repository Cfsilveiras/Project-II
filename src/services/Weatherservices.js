import axios from 'axios';

const API_KEY = "25b59082a5bd9b2f7932f22ede7ba0d1";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
    try{
        const response = await axios.get(BASE_URL, {
            params:{
                q: city,
                appid: API_KEY,
                units: "metric",
                lang: "pt_br",
            },
        });

        return response.data;
    } catch (error){
        console.error("Not possible to fetch the weather data", error);
        return null;
    }
};

// //O arquivo Weatherservices.js é um arquivo de serviço que contém uma função fetchWeather que faz uma requisição para a API do OpenWeatherMap
// //O arquivo Weatherservices.js exporta a função fetchWeather para ser utilizada em outros lugares do código 
// //A função fetchWeather recebe uma cidade como parâmetro e retorna os dados do clima da cidade
// //A função fetchWeather faz uma requisição para a API do OpenWeatherMap com a cidade passada como parâmetro
// //A função fetchWeather retorna os dados do clima da cidade em caso de sucesso
// //A função fetchWeather retorna null em caso de erro
// //A função fetchWeather é uma função assíncrona que utiliza o axios para fazer a requisição para a API do OpenWeatherMap
// //A Função assincrona é uma função que depende de AGUARDAR (await) uma resposta de uma operação assíncrona (como uma requisição para uma API) para continuar a execução do código    