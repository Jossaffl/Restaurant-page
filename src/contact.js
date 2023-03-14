export { contactUs as contactUs }

const contactUs = (div) => {
    div.innerHTML = '';
    const phoneNumber = document.createElement('div')
    phoneNumber.classList.add('phone')
    phoneNumber.textContent = '471-7571'
    const croquis = document.createElement('img');
    croquis.src = 'https://realestate-resources.scdn2.secure.raxcdn.com/wp-content/uploads/sites/8/2020/10/Umeda-Osaka-Google-Maps-Screenshot.png'
    croquis.setAttribute('id', 'croquis')
    div.appendChild(phoneNumber)
    div.appendChild(croquis)
}
