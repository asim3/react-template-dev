import { get, post } from "./request"


test('fetch get data', async () => {
    const data = await get("https://swapi.dev/api/films/?format=json", (data) => data)

    expect(data.count).toBe(6)
    expect(data.next).toBe(null)
    expect(data.previous).toBe(null)

    expect(data.results.length).toBe(6)
});



test('test get 404', async () => {
    const data = await get("https://swapi.dev/api/404error/", (data) => data)

    expect(data.error).toBe("SyntaxError")
    expect(data.message).toBe("Unexpected token < in JSON at position 1")
});


test('test get error', async () => {
    const data = await get("http://", (data) => data)

    expect(data.error).toBe("SyntaxError")
    expect(data.message).toBe("The string did not match the expected pattern.")
});


// test('test get network error', async () => {
//     const data = await get("https://error.error", (data) => data)

//     expect(data.error).toBe("TypeError")
//     expect(data.message).toBe("Network request failed")
// });
