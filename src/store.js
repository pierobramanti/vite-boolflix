import { reactive } from "vue";

export const store = reactive({
    endpoint: "https://api.themoviedb.org/3",
    keyApi: "?api_key=bcdd97706c9e0adc39f8b859f6b73d1f",
    searchMovie: "/search/movie",
    searchTv: "/search/tv",
    movieArray: [],
    seriesArray: [],
    clientInput: "",
})