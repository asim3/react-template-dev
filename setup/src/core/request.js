import handle_response from './response';



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


async function get(url, set_function) {
    const response = await fetch(url);
    const content = await handle_response(response)
    console.log(content)
    const aaaa = JSON.stringify(content)
    return set_function(aaaa)
}


async function post(url, set_function, content = {}, extra_body = {}) {
    const body = {
        method: "POST",
        body: JSON.stringify(content),
        headers: get_headers(content),
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
        ...extra_body
    }

    const response = await fetch(url, body);
    const data = await handle_response(response)
    console.log(content)
    const aaaa = JSON.stringify(data)
    return set_function(aaaa)
}


export { get, post };
