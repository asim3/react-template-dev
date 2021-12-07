import handle_error_response from "./response";


test('test Error response', () => {
    const error = new Error("My Error response message")
    const response = handle_error_response(error)

    expect(response.error).toBe("Error")
    expect(response.message).toBe("My Error response message")
});


test('test TypeError response', () => {
    const error = new TypeError("My TypeError response message")
    const response = handle_error_response(error)

    expect(response.error).toBe("TypeError")
    expect(response.message).toBe("My TypeError response message")
});


test('test SyntaxError response', () => {
    const error = new SyntaxError("My SyntaxError response message")
    const response = handle_error_response(error)

    expect(response.error).toBe("SyntaxError")
    expect(response.message).toBe("My SyntaxError response message")
});


test('test ReferenceError response', () => {
    const error = new ReferenceError("My ReferenceError response message")
    const response = handle_error_response(error)

    expect(response.error).toBe("ReferenceError")
    expect(response.message).toBe("My ReferenceError response message")
});
