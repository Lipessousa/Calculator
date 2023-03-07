function Calculator(){
    this.display = document.querySelector('.display')
    this.run = () => {
        this.getClick()
        this.getEnter()
    }
    this.clear = () => {
        this.display.value = ''
    }
    this.delNum = () => {
        this.display.value = this.display.value.slice(0, -1)
    }
    this.result = () => {
        try{
            let calc = this.display.value
            calc = eval(calc)
            if(!calc){
                alert('Conta inválida')
                return
            }
            this.display.value = calc
        }catch{
            alert('Conta inválida')
        }
    }
    this.getEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.result()
            }
        })
    }
    this.getClick = () => {
        document.addEventListener('click', event => {
            const el = event.target
            if(el.classList.contains('btn-num')) this.addNumber(el.innerText)
            if(el.classList.contains('btn-clear')) this.clear()
            if(el.classList.contains('btn-del')) this.delNum()
            if(el.classList.contains('btn-equa')) this.result()
        })
    }
    this.addNumber = (value) => {
        this.display.value += value
    }
}
const calculator = new Calculator()
calculator.run()