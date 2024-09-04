const list = document.querySelector("ul")
let myLi = ``

    function showAll() {
        menuOptions.forEach( products => {
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
