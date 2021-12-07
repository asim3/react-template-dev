
function handle_error_response(error) {
    return {
        error: error.name,
        message: error.message,
    }
}


export default handle_error_response;