    const Btn= document.querySelector('.LogoMenu')
    const DropDownMenu= document.querySelector('.menu')
    const BtnIcon = document.querySelector('.Logo2 i')

    Btn.onclick = function(){
        DropDownMenu.classList.toggle('open')
        const isOpen =  DropDownMenu.classList.contains('open')
        BtnIcon.classList = isOpen
        ?'fa fa-sort-desc'
        :'fa fa-bars'
    }