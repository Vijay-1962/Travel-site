import '../styles/styles.css'
import MobileMenu from '../scripts/modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu();
let modal


document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined"){
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(),20)
                }).catch(() => alert("there was a problem"))
        } else {
            // console.log(typeof modal)
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}