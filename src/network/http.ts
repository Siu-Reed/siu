export default class HttpClient {
    constructor(private baseURL:string) {;
    }

    async fetch(url:string, options:RequestInit) {
        const res = await fetch(
            `${this.baseURL}${url}`, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            }
        );

        let data;
        try {
            data = await res.json();
        } catch (err) {
            const e = JSON.parse(JSON.stringify(err)).error;
            e && console.log(e);
        }
    
        if (res.status > 299 || res.status < 200) {
            const message =
                data && data.message ? data.message : 'Something went wrong! 🤪';
            const error = new Error(message);
            if (res.status === 401) {
                console.log(error);
                return;
            }
            throw error;
        }
        return data;
    }
}
