import { reactive } from "vue";

export const store = reactive({
    keyApi: "?api_key=bcdd97706c9e0adc39f8b859f6b73d1f",
    endpoint: "https://api.themoviedb.org/3",
    searchMovie: "/search/movie",
    searchTv: "/search/tv"
})