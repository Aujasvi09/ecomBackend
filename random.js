const {number} = req.body
users.data.some((user) => user.number === number) ? res.send(JSON({message: "User exists"})) : res.send(JSON({messag: "User Does not exist"}))


// Getting Single Product By ID

app.post("/api/product", (req,res) => {
  const {id} = req.body
  
  const isValidID = products.data.some((prod) => prod.id === id)
    
  !isValidID && res.status(401).json({message:"Invalid ID"})

  const productSearched =  products.data.find((prod) => {
    return prod.id === id
  })

  res.status(200).json(productSearched)
})