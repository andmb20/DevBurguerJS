const list = document.querySelector("ul")

function showAll(productsarray) {
    let myLi = ``

    productsarray.forEach(products => {
        myLi += `
                    <li class="products">
                        <img src=./${products.src}>
                        <p>${products.name}</p>
                        <p class="price">R$ ${products.price}</p>
                    </li> 
            `
        list.innerHTML = myLi
    });
}

function mapAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))
    showAll(newPrices)
}

function sumAll(){
    const sumAllItems = menuOptions.reduce((acc, current) => acc + current.price, 0)

    list.innerHTML = `<li><p>A soma total dos itens é: <br> R$ ${sumAllItems}</p></li>`
}

function filterAll() {
    const filterVeganItems = menuOptions.filter((products) => products.vegan)

    showAll(filterVeganItems)
    
}