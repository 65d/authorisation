function generateButtons(buttonData) {
    const section = document.getElementById('dynamic-buttons');
    
    buttonData.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button.text;
        btn.id = button.id;
        btn.onclick = () => window.location.href = button.url;

        
        // Append the new button to the section
        section.insertBefore(btn, document.getElementById('logout-btn'));
    });
        

}

const menu_btn = document.createElement('button');
menu_btn.textContent = "Menu";  // Change 'btn' to 'menu_btn'
menu_btn.id = "menu-open-c-button";
document.getElementById("nav").appendChild(menu_btn);

let menu = document.getElementById('dynamic-buttons');
let openm = false;

document.getElementById("menu-open-c-button").addEventListener('click', function(){
    console.log(1)
    openm = !openm;
    if (openm) {
        menu.classList.toggle('active-dynamic-buttons');

    }
    else {
        menu.classList.remove('active-dynamic-buttons');

    }
})


// menuItem.forEach (function(menuItem) {
//   menuItem.addEventListener('click',function(){
//           menuBtn.classList.toggle('active');
//           menu.classList.toggle('active');
//   })
// })


