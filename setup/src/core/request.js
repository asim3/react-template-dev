import handle_error_response from './response';



function get_headers(_content, extra_headers = {}) {
    const content = 'Hello World';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/plain');
    myHeaders.append('Content-Length', content.length.toString());
    myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

    return {
        'Content-Type': 'application/json',
        ...extra_headers
    }
}


async function get(url, callback) {
    try {
        return await fetch(url)
            .then(response => response.json())
            .then(callback, handle_error_response)
            .catch(handle_error_response)
    } catch (error) {
        return handle_error_response(error)
    }
}


async function post(url, callback, content = {}, extra_context = {}) {
    const context = {
        method: "POST",
        body: JSON.stringify(content),
        headers: get_headers(content),
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
        ...extra_context
    }
    try {
        return await fetch(url, context)
            .then(response => response.json())
            .then(callback, handle_error_response)
            .catch(handle_error_response)
    } catch (error) {
        return handle_error_response(error)
    }
}


export { get, post };
