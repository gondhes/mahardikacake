export function setCakes(payload) {
  return { type: 'cakes/setCakes', payload }
}

export function setCakesAsync(url) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setCakes(data))
      })
      .catch(err => console.log(err))
  }
}