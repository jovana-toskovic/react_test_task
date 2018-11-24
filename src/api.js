const API_URL =  'http://localhost:3000'

const apiFetch = (path = '', method = 'GET', data) => {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  }

  if (data && Object.keys(data).length) options["body"] = JSON.stringify(data)

  return fetch(`${API_URL}${path}`, options).then(resp => {
    return resp.text().then(text => {
      return text ? JSON.parse(text) : {}
    })
  })
}

export default apiFetch;
