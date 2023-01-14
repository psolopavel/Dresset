window.addEventListener('DOMContentLoaded', function () {
   const categorys = this.document.querySelectorAll('.header__item')
   const header_subs = this.document.querySelectorAll('.header-sub')
   let j = 0
   let b = 0
   categorys.forEach(category => {
      if (category.classList.contains('header__menu')) {
         ++j
         category.setAttribute('data-parent', `${j}`)
      }
   });
   header_subs.forEach(sub => {
      ++b
      sub.setAttribute('data-submenu', `${b}`)
   });
})