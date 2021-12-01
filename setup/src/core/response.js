
async function handle_response(response) {
    if (response.ok) {
        const json_data = await response.json()
        return {
            url: response.url,
            status: response.status,
            statusText: response.statusText,
            body: json_data
        }
    }

    return "error response! " + response.statusText
}


function handle_error_response(response) {
    return "error response!"
}


export default handle_response;
