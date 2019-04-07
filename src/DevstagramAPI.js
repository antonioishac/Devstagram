const devUrl = 'http://localhost:8082/';

const DevstagramApi = {

    req:(options)=>{

        let urlSufix = '';
        let urlMethod = 'GET';
        let urlData = {};
        let urlSuccess = ()=>{};
        let urlError = ()=>{};
        let headers = {};

        if (options.endpoint) {
            urlSufix = options.endpoint;
        }
        if (options.method) {
            urlMethod = options.method;
        }
        if (options.headers) {
            headers = options.headers;
        }
        if (options.data) {
            urlData = options.data;
        }
        if (options.success) {
            urlSuccess = options.success;
        }
        if (options.error) {
            urlError = options.error;
        }

        let endpoint = devUrl + urlSufix;
        let jsonData = JSON.stringify(urlData);

        fetch(endpoint, {
            method: urlMethod,
            headers: headers,
            body: jsonData
        })
        .then((r) => r.json())
        .then(urlSuccess)
        .catch(urlError)
    }
};

export default DevstagramApi;