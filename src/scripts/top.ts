import { breakpoint } from '~/main'
import '../styles/object/project/top.css'
import 'swiper/css'
import 'swiper/css/pagination'

const setImagePosition = () => {
  try {
    const windowWidth = window.innerWidth
    const works = document.querySelector<HTMLDivElement>('.js-works')!
    const worksSlider = document.querySelector<HTMLDivElement>('.js-slider')!
    const worksSliderImage = document.querySelector<HTMLImageElement>('.js-slider img')!
    if (windowWidth < breakpoint) {
      const imgHeight = worksSliderImage.clientHeight

      works.style.marginTop = `${imgHeight / 2 + 50}px`
      worksSlider.style.top = `-${imgHeight / 2}px`
      worksSlider.style.paddingTop = `${imgHeight / 2 + 50}px`
      worksSlider.style.marginTop = `-${imgHeight / 2 + 50}px`
    } else {
      works.removeAttribute('style')
      worksSlider.removeAttribute('style')
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
    }
  }
}

window.addEventListener('load', setImagePosition)
window.addEventListener('resize', setImagePosition)
