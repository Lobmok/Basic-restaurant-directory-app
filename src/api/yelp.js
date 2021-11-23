import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer 3qq3JsDs5RivVT6400Wk-SrAqRpFSQ895aPCud9PRyu_bKuz_fDEqEGIsNT-sZECWp5XSCR5NvgimvhY7yvhxQNpf33Iq15zGuxX0PcRgYhwGMNF5XfCsIyC2jqcYXYx'
    }
});