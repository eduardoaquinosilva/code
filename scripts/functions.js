const wrapper = document.querySelector('.wrapper')
const question = document.querySelector('.question')
const yesBtn = document.querySelector('#yes')
const noBtn = document.querySelector('#no')
const confirmation = document.querySelector('.confirmation')
const answers = document.querySelector('.answers')
const main = document.querySelector('main')

const yesAnswerMethod = () => {
    document.body.style.widows = '100vw'
    document.body.style.overflow = 'hidden'
    document.body.style.display = 'block'
    wrapper.style.display = 'none'
    main.style.display = 'flex'
    main.style.flexDirection = 'column'
    main.style.width = '100%'
    main.style.height = '100%'
    main.style.alignItems = 'center'
    main.style.justifyContent = 'center'

    const canvas = document.querySelector('#canv')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.position = 'absolute'
    canvas.style.zIndex = '-1'

    const text01 = document.querySelector('#text01')
    const text02 = document.querySelector('#text02')
    const text03 = document.querySelector('.text03')
    const text0301 = document.querySelector('#text0301')
    const text0302 = document.querySelector('#text0302')
    const text0303 = document.querySelector('#text0303')

    text01.style.textAlign = 'center'
    text02.style.textAlign = 'center'
    text03.style.textAlign = 'center'

    text01.style.color = '#0f0'
    text02.style.color = '#0f0'
    text03.style.color = '#0f0'

    text01.style.fontSize = '7em'
    text02.style.fontSize = '7em'
    text03.style.fontSize = '8em'

    text01.style.fontFamily = "'Matrix', Times, serif"
    text02.style.fontFamily = "'Matrix', Times, serif"
    text03.style.fontFamily = "'Matrix', Times, serif"
    text0302.style.fontFamily = 'Times'

    text03.style.display = 'flex'
    text03.style.justifyContent = 'center'
    text03.style.alignItems = 'center'

    const ctx = canvas.getContext('2d')
    const w = canvas.width = document.body.offsetWidth
    const h = canvas.height = document.body.offsetHeight
    const cols = Math.floor(w/20) + 1
    console.log("Cols = " + cols)
    const yPos = Array(cols).fill(0)
    console.log("yPos = " + yPos)

    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, w, h)

    function DesenharMatrix() {
        ctx.fillStyle = '#0001'
        ctx.fillRect(0, 0, w, h)

        ctx.fillStyle = '#0f0'
        ctx.font = '10pt monospace'

        yPos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128)
            const x = ind * 20
            ctx.fillText(text, x, y)

            if (y > 100 + Math.random() * 10000) yPos[ind] = 0
            else yPos[ind] = y + 20
        })
    }
    
    const drawMatrixInterval = setInterval(DesenharMatrix, 50)

    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('')
        elemento.innerHTML = ''
        textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 75 * i)
        })
        console.log(textoArray)
    }
    
    text01.style.display = 'none'
    text02.style.display = 'none'
    text03.style.display = 'none'
    
    setTimeout(() => {
        text01.style.display = 'block'
        typeWriter(text01)
    }, 2000)
    
    setTimeout(() => {
        text02.style.display = 'block'
        typeWriter(text02)
    }, 4000)

    setTimeout(() => {
        text03.style.display = 'flex'
        text0302.style.display = 'none'
        text0303.style.display = 'none'
        typeWriter(text0301)
    }, 6000)

    setTimeout(() => {
        text0302.style.display = 'block'
        typeWriter(text0302)
    }, 6300)

    setTimeout(() => {
        text0303.style.display = 'block'
        typeWriter(text0303)
    }, 6375)

    setTimeout(() => {
        text01.style.animation = 'vanish 2s'
    }, 9375)

    setTimeout(() => {
        text01.style.display = 'none'
    }, 11375)

    setTimeout(() => {
        text02.style.animation = 'vanish 2s'
    }, 11375)

    setTimeout(() => {
        text02.style.display = 'none'
    }, 13375)

    setTimeout(() => {
        text0301.style.animation = 'vanish 2s'
        text0303.style.animation = 'vanish 2s'
    }, 13375)

    setTimeout(() => {
        text0301.style.display = 'none'
        text0303.style.display = 'none'
    }, 15375)

    setTimeout(() => {
        text0302.style.animation = 'bigFour 5s'
    }, 15375)

    setTimeout(() => {
        text0302.style.display = 'none'
    }, 20375)

    setTimeout(() => {
        clearInterval(drawMatrixInterval)
        main.style.display = 'none'

        document.body.style.display = 'grid'
        document.body.style.placeItems = 'center'
        document.body.style.height = '100vh'
        
        wrapper.style.display = 'flex'
        wrapper.style.flexDirection = 'column'
        wrapper.style.alignItems = 'center'
        wrapper.style.justifyContent = 'center'

        const questionTitle = document.querySelector('#question-title')
        questionTitle.style.display = 'none'
        answers.style.display = 'none'
    }, 22375)

    setTimeout(() => {
        const confirmation = document.querySelector('.confirmation')
        const confirmationTitle = document.querySelector('#confirmation-title')

        confirmation.style.display = 'block'
        typeWriter(confirmationTitle)
    }, 24375)
}

const noAnswerMethod = () => {
    answers.style.justifyContent = 'space-between'
    noBtn.style.position = 'absolute'

    const xPosition = Math.floor(Math.random() * wrapper.clientWidth)
    const yPosition = Math.floor(Math.random() * wrapper.clientHeight)

    noBtn.style.left = xPosition >= wrapper.clientWidth / 2 ? `${xPosition - noBtn.clientWidth}px` : `${xPosition}px`
    noBtn.style.top = yPosition >= wrapper.clientHeight / 2 ? `${yPosition - noBtn.clientHeight}px` : `${yPosition}px`
}

yesBtn.addEventListener('click', yesAnswerMethod)
noBtn.addEventListener('click', noAnswerMethod)
