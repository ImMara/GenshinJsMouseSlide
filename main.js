const left = document.querySelector('.left')
const center = document.querySelector('.center')
const right = document.querySelector('.right')
const background = document.querySelector('.background')
const pyro = document.querySelector('.pyro')
const hydro = document.querySelector('.hydro')
const anemo = document.querySelector('.anemo')


left.addEventListener('mouseenter' , evt => {

    left.style.left='10%'
    center.style.left='70%'
    right.style.left='130%'

    pyro.style.marginRight='300px'
    hydro.style.marginRight='100px'

    document.querySelector('.color-hydro').style.textShadow= '2px 2px 4px #000000'
    document.querySelector('.color-hydro').style.textDecoration = 'none'
    document.querySelector('.color-pyro').style.textShadow= '2px 2px 10px rgba(255, 168, 112, 0.6)'
    document.querySelector('.color-pyro').style.textDecoration = 'underline'

    background.animate([
        {backgroundPosition : ' 0 100%'}
    ], {
        duration: 1000, fill:"forwards"
    })
})

center.addEventListener('mouseover', evt=>{

    left.style.left='0%'
    center.style.left='50%'
    right.style.left='95%'

    pyro.style.marginRight='100px'
    anemo.style.marginLeft='250px'
    hydro.style.marginRight='300px'

    document.querySelector('.color-hydro').style.textShadow = '2px 2px 4px rgba(8, 225, 252, 0.6)'
    document.querySelector('.color-hydro').style.textDecoration = 'underline'
    document.querySelector('.color-pyro').style.textShadow= '2px 2px 4px #000000'
    document.querySelector('.color-pyro').style.textDecoration = 'none'
    document.querySelector('.color-anemo').style.textShadow= '2px 2px 4px #000000'
    document.querySelector('.color-anemo').style.textDecoration = 'none'

    background.animate([
        {backgroundPosition : ' 50% 100%'}
    ], {
        duration: 1000, fill:"forwards"
    })
})

right.addEventListener('mouseover',evt=>{

    left.style.left='-30%';
    center.style.left='20%';
    right.style.left='82%';

    hydro.style.marginRight='100px'
    anemo.style.marginLeft='450px'

    document.querySelector('.color-hydro').style.textShadow= '2px 2px 4px #000000'
    document.querySelector('.color-hydro').style.textDecoration = 'none'
    document.querySelector('.color-anemo').style.textShadow = ' 2px 2px 4px rgba(166, 244, 204, 0.6)'
    document.querySelector('.color-anemo').style.textDecoration = 'underline'

    background.animate([
        {backgroundPosition : ' 100% 100%'}
    ], {
        duration: 1000, fill:"forwards"
    })
})


