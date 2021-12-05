
async function handle_response(response) {
    if (response.ok) {
        const json_data = await response.json()
        return {
            url: response.url,
            status: response.status,
            status_code: response.status_code,
            statusText: response.statusText,
            detail: response.statusText,
            data: json_data
        }
    }

    return {
        url: response.url,
        status: response.status,
        status_code: response.status_code,
        statusText: response.statusText,
        detail: response.statusText,
        data: null
    }
}


function handle_error_response(error) {
    return {
        url: null,
        status: "400",
        status_code: "400",
        statusText: "Errrrrrrrrrrr",
        detail: error.detail,
        data: null
    }
}


export default handle_response;
export { handle_error_response };