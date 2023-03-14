import '../src/styles/main.scss';
import { showMenu } from './menu.js';
import { contactUs } from './contact.js';
export { displayWebsite }

const DivCreator = (div) => {
    const contentDiv = document.getElementById('content');
    const appendDiv = () => {
        contentDiv.appendChild(div)
    }

    return { contentDiv, appendDiv, div }
}

const headerDiv = () => {
    const headDiv = DivCreator(document.createElement('div'))
    headDiv.div.classList.add('headerDiv')

    const home = document.createElement('button')
    home.setAttribute('id', 'home')
    home.textContent = 'Home'


    const menu = document.createElement('button')
    menu.setAttribute('id', 'menu')
    menu.textContent = 'menu'

    const contact = document.createElement('button')
    contact.setAttribute('id', 'contact')
    contact.textContent = 'Contact us'

    headDiv.div.appendChild(home)
    headDiv.div.appendChild(menu)
    headDiv.div.appendChild(contact)

    headDiv.appendDiv()

    return {
        home, menu, contact
    }
}

const middleDiv = () => {
    const bodyDiv = DivCreator(document.createElement('div'));
    bodyDiv.div.setAttribute('id', 'bodyDiv');

    const textDiv = DivCreator(document.createElement('div'));

    const homeImage = document.createElement('img')
    homeImage.src = 'https://cdn-icons-png.flaticon.com/512/325/325583.png'

    textDiv.div.classList.add('textDiv')

    textDiv.div.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    textDiv.div.appendChild(homeImage)


    bodyDiv.div.appendChild(textDiv.div);

    bodyDiv.appendDiv()

    menu.addEventListener('click', (e) => {
        showMenu(textDiv.div)
    })

    home.addEventListener('click', () => {
        textDiv.contentDiv.innerHTML = '';
        displayWebsite()
    })

    contact.addEventListener('click', (e) => {
        contactUs(textDiv.div)
    })

}

const footerDiv = () => {
    const footDiv = DivCreator(document.createElement('div'));
    footDiv.div.classList.add('footDiv');
    footDiv.div.textContent = 'website created by Jossaffl'

    footDiv.appendDiv()
}

const displayWebsite = () => {
    headerDiv();
    middleDiv();
    footerDiv();
}


