"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortURL = exports.toRupiah = exports.capitalizeEachWord = exports.generateRandomString = void 0;
const generateRandomString = (length = 15) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
exports.generateRandomString = generateRandomString;
const capitalizeEachWord = (str) => {
    const words = str.split(' ');
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
};
exports.capitalizeEachWord = capitalizeEachWord;
const toRupiah = (value) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });
    return formatter.format(value);
};
exports.toRupiah = toRupiah;
const generateShortURL = (length = 15, baseURL) => {
    const code = exports.generateRandomString(length);
    const base = baseURL !== null && baseURL !== void 0 ? baseURL : String(process.env.BASE_SHORTEN_URL);
    return {
        code,
        url: `${base}/${code}`
    };
};
exports.generateShortURL = generateShortURL;
