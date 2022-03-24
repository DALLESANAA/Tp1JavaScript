
app.get("/universities", () => {
    axios.get(URL)
    .then(resp => {
        console.log(resp.data);})
      .catch(err => res.send(err));
  })
//const 