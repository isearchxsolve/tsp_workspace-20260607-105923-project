fetch('/api/tsp')
    .then(response => response.json())
    .then(data => console.log(data));