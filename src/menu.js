export { showMenu }

const menuCreator = () => {
    for (let i = 0; i <= 7; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-items')
        menuItem.setAttribute('id', `item${i}`)
        document.body.appendChild(menuItem);

    }
};

const showMenu = (div) => {

    menuCreator();

    div.innerHTML = '';

    const item1 = document.getElementById('item0')
    const image1 = document.createElement('img')
    image1.src = 'https://cdn-icons-png.flaticon.com/512/5053/5053385.png'
    item1.textContent = 'Menu item 1'
    item1.appendChild(image1)
    div.appendChild(item1)


    const item2 = document.getElementById('item1')
    const image2 = document.createElement('img')
    image2.src = 'https://cdn-icons-png.flaticon.com/512/786/786954.png'
    item2.textContent = 'Menu item 2 '
    item2.appendChild(image2)
    div.appendChild(item2)

    const item3 = document.getElementById('item2')
    const image3 = document.createElement('img')
    image3.src = 'https://cdn-icons-png.flaticon.com/512/3925/3925263.png'
    item3.textContent = 'Menu item 3 '
    item3.appendChild(image3)
    div.appendChild(item3)

    const item4 = document.getElementById('item3')
    const image4 = document.createElement('img')
    image4.src = 'https://cdn-icons-png.flaticon.com/512/6083/6083259.png'
    item4.textContent = 'Menu item 4'
    item4.appendChild(image4)
    div.appendChild(item4)

    const item5 = document.getElementById('item4')
    const image5 = document.createElement('img')
    image5.src = 'https://cdn-icons-png.flaticon.com/512/5229/5229690.png'
    item5.textContent = 'Menu item 5'
    item5.appendChild(image5)
    div.appendChild(item5)

    const item6 = document.getElementById('item5')
    const image6 = document.createElement('img')
    image6.src = 'https://cdn-icons-png.flaticon.com/512/5053/5053361.png'
    item6.textContent = 'Menu item 6 '
    item6.appendChild(image6)
    div.appendChild(item6)


    const item7 = document.getElementById('item6')
    const image7 = document.createElement('img')
    image7.src = 'https://cdn-icons-png.flaticon.com/512/8075/8075087.png'
    item7.textContent = 'Menu item 7'
    item7.appendChild(image7)
    div.appendChild(item7)

    const item8 = document.getElementById('item7')
    const image8 = document.createElement('img')
    image8.src = 'https://cdn-icons-png.flaticon.com/512/8075/8075019.png'
    item8.textContent = 'Menu item 8 '
    item8.appendChild(image8)
    div.appendChild(item8)


    div.appendChild(item2)
    div.appendChild(item3)
    div.appendChild(item4)
    div.appendChild(item5)
    div.appendChild(item6)
    div.appendChild(item7)
    div.appendChild(item8)
}
