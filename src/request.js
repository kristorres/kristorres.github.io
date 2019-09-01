const validate = (response) => {
    if (response.ok === false) {
        return Promise.reject(new Error("The response is not OK! 😠"));
    }
    const mediaType = response.headers.get("Content-Type");
    if (mediaType.startsWith("application/json") === false) {
        const errorMessage = "The response is not a JSON object! 😕";
        return Promise.reject(new Error(errorMessage));
    }
    return Promise.resolve(response);
};

const request = {
    get: async (url) => {
        return await fetch(url)
            .then(validate)
            .then(
                (response) => response.json()
            );
    }
};

export default request;
