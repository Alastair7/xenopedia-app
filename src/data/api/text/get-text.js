var response = fetch('https://localhost:32768/Text/GetTextAll')
.then(response => {
    return response.json();
});

export { response }