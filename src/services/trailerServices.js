export const addTrailer = (trailer) => {
    return fetch(`http://10.20.8.158:5002/api/v2/trailers/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trailer),
    }).then((res) => res.json())
}

export const getTrailers = (id) => {
  return fetch(`http://10.20.8.158:5002/api/v2/trailers/all/trailers?organizationId=${id}`).then((res) => res.json())
}