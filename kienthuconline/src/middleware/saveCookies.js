function saveCookies() {
    return fetch('http://localhost:4000/login', {
        headers: {
            'Authorization': 'Token ' + window.sessionStorage.getItem('token'),
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
        }
    }).then(function(response) {
        return response.json();
    })
}