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
        addCart(){
            console.log('asd')
        }
    }

    const firstItem = new Items('Air force 1 black', 'assets/blackforce.jfif','120$')
    const secondItem = new Items('Air force 1 pink', 'assets/pinklforce.jfif','130$')
    const thirdItem = new Items('Air force 1 pink', 'assets/whiteanime.jfif','140$')
    const fourthItem = new Items('Air force 1 white', 'assets/whitecustom.jfif','150$')
    const fivesItem = new Items('Air force 1  white', 'assets/whiteforce.jfif','100$')
    const sixItem = new Items('Air force 1 w/b', 'assets/whitewithblack.jfif','170$')

    firstItem.createElement()
    firstItem.addCart()
    secondItem.createElement()
    thirdItem.createElement()
    fourthItem.createElement()
    fivesItem.createElement()
    sixItem.createElement()
    getItem()


    let counter = 0
    function getItem(){
        const items = document.querySelector('.products')
        items.addEventListener('click',(event)=>{
            if(event.target.classList.contains('item-price')){counter++; putCart();putItem(event.target.parentElement)}
        })
    }

    function putCart(){
        let cart = document.querySelector('#cart')
        cart.innerHTML = `${counter} items`
    }
    const modal = document.querySelector('.modal')

    function openModal(){
        const cartBtn = document.querySelector('#cart')
        cartBtn.addEventListener('click',()=>{
            modal.style.display = "block"
        })
    }
    function closeModal(){
        const closeBtn = document.querySelector('.close')
        closeBtn.addEventListener('click',(event)=>{
            modal.style.display = "none"
            if(event.target.classList != 'myModal'){console.log('oj')}
        })
    }

    const modalContent = document.querySelector('.modal-content')
    function putItem(item){}
    openModal()
    closeModal()


})  