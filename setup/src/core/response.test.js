import handle_response, { handle_error_response } from "./response";


test('fetch get error', () => {
    const response = handle_response(data)
    expect(response.status_code).toBe("400")
    expect(response.detail).toBe("OK")
    expect(response.data.count).toBe(5)
    expect(response.data.next).toBe(5)
    expect(response.data.previous).toBe(5)
});
