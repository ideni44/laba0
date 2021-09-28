window.addEventListener('DOMContentLoaded', ()=>{
    
    class Items {
        constructor(name,photo,price){
            this.name = name
            this.photo = photo
            this.price = price
        }
        createElement(){
            const productlist = document.querySelector('.productslist')
            const item = document.createElement('div')
            item.classList.add('product-item')
            item.innerHTML = 
                `
                <h1 class="item_name">${this.name}</h1>
                <img class="item_img" src="${this.photo}" alt="">
                <p class="item-price">${this.price}</p>

                `
            productlist.append(item)
        }
    }

    const firstItem = new Items('Air force 1 black', 'assets/blackforce.jfif','120$')
    const secondItem = new Items('Air force 1 pink', 'assets/pinklforce.jfif','130$')
    const thirdItem = new Items('Air force 1 pink', 'assets/whiteanime.jfif','140$')
    const fourthItem = new Items('Air force 1 white', 'assets/whitecustom.jfif','150$')
    const fivesItem = new Items('Air force 1  white', 'assets/whiteforce.jfif','100$')
    const sixItem = new Items('Air force 1 w/b', 'assets/whitewithblack.jfif','170$')

    firstItem.createElement()
    secondItem.createElement()
    thirdItem.createElement()
    fourthItem.createElement()
    fivesItem.createElement()
    sixItem.createElement()


    const closeBtn = document.querySelector('.close')
    const cartBtn = document.querySelector('#cart')
    const cart = document.querySelector('#cart')
    const items = document.querySelector('.products')
    const modal = document.querySelector('.modal')
    const modalItems = document.querySelector('.modal-items')

    let counter = 0
    function getItem(){
        items.addEventListener('click',(event)=>{
            if(event.target.classList.contains('item-price')){
                counter++; 
                putCart();
                putItem(event.target.parentElement.cloneNode(true))
            }
        })
    }

    function putCart(){
        cart.innerHTML = `${counter} items`
    }

    function openModal(){
        cartBtn.addEventListener('click',()=>{
            modal.style.display = "block"
        })
    }
    function closeModal(){
        closeBtn.addEventListener('click',()=>{
            modal.style.display = "none"
        })
    }

    function putItem(item){
        modalItems.appendChild(item)
        deleteItem(item)
    }

    function deleteItem(item){
        item.addEventListener('click',()=>{
            item.remove()
            counter--;
            putCart()
        })
        // modalItems.remove(item)
    }

    getItem()
    openModal()
    closeModal()
})  