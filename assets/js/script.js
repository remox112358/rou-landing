/**
 * On document load.
 */
$(document).ready(() => {

  /**
   * AOS plugin initialization.
   */
  AOS.init()

  /**
   * Torrent links functionality.
   */
  $('body').on('click', '[href*="#"]', event => {
    $('html,body').stop().animate({ 
      scrollTop: $(event.target.hash).offset().top - 20 
    }, 1000)
  
    event.preventDefault()
  })

  /**
   * Testimonials slider initialization.
   */
  $('.section--testimonial .slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.section--testimonial .section__content'),
    customPaging: () => '<div class="dot"></div>'
  })

  /**
   * Scrollbar indicator functionality.
   */
  $(document).on('scroll', () => {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height       = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled     = (windowScroll / height) * 100

    $('.scroll-indicator .bar').css('width', scrolled + '%')
  })

  /**
   * Paroller plugin initialization.
   */
  $(".decoration").paroller({ 
    factor: 0.3, 
    factorXs: 0.5, 
    type: 'foreground', 
    direction: 'vertical' 
  })

})
