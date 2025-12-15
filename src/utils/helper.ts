export const generateRandomString = (length = 15): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

export const capitalizeEachWord = (str: string): string => {
    const words = str.split(' ');
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
};

export const toRupiah = (value: number): string => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });

    return formatter.format(value);
};

export const generateShortURL= (length = 15, baseURL?: string): { code: string; url: string; } => {
    const code = generateRandomString(length);
    const base = baseURL ?? String(process.env.BASE_SHORTEN_URL);
    return {
        code,
        url: `${base}/${code}`
    };
};
