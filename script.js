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