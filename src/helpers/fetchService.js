export const fetchService = (url, method, data) =>
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: method === 'POST' ? JSON.stringify(data) : null
  })
    .then(res => res.json())
    .then(response => response)
    .catch(err => console.error(err));
