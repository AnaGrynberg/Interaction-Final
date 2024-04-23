
fetch('../data.json')
        
    .then(contents => contents.json())
    
    .then(food => {
            
                renderItems(food) 
        })
    

const renderItems = (food) => {
    const collectionList = document.getElementById('collection')
}

 food.forEach(food => {
    const listItem = document.createElement('div')

const itemTitle = document.createElement('p') // Make an `h2`
listItem.innerHTML = food.__6 // Put the JSON title inside
listItem.appendChild(itemTitle) // And add it to the `li`!

const itemImage = document.createElement('img') // And an image
itemImage.src = food.__2 // Set the `src` attribute from the JSON
listItem.appendChild(itemImage) // And add that too

collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`

})
