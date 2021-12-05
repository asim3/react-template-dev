import { get, post } from "./request"


test('fetch get error', async () => {
    const response = await get("error", () => 999)
    expect(response.status_code).toBe("400")
    expect(response.detail).toBe("OK")
    expect(response.data.count).toBe(5)
    expect(response.data.next).toBe(5)
    expect(response.data.previous).toBe(5)
    expect(response).toBe({
        status_code: "202",
        detail: "Error",
        data: null
    });
});


test('fetch get data', async () => {
    const response = await get("https://swapi.dev/api/films/", () => 999)
    expect(response.status_code).toBe("203")
    expect(response.detail).toBe("OK")
    expect(response.data.count).toBe(5)
    expect(response.data.next).toBe(5)
    expect(response.data.previous).toBe(5)
});


test('fetch get 404', async () => {
    const response = await get("https://swapi.dev/api/404error/", () => 999)
    expect(response.status_code).toBe("404")
    expect(response.detail).toBe("NOT FOUND")
    expect(response.data).toBe(null)
});
