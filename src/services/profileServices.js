export const registerUser = (newUserData) => {
  // console.log(newUserData)
  return fetch(`http://10.20.8.158:5002/api/v2/accounts/register`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  })
    .then((res) => res.json())
}

export const loginUser = (userData) => {
  return fetch(`http://10.20.8.158:5002/api/v2/accounts/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => res.json())
}
