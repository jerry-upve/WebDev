fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({
        user: 'jerry',
        password: "1234567",
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

