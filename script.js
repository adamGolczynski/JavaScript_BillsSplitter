const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const selectTip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const span = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')


const check = () => {
	if (!inputPrice.value || !inputPeople.value || selectTip.value === 0) {
		error.textContent = 'Uzupełnij wszystkie pola formularza lub popraw wprowadzone dane!'
        costInfo.style.display = 'none'
	} else {
        error.textContent = ''
		calculate(inputPrice.value, inputPeople.value, selectTip.value)
	}
}

const calculate = (price, people, tip) => {

    // Można by też uzyć parseInt(people) i parseFloat(price), parseFloat(tip) - potrzebujemy miejsc po przecinku

	const totalPrice = ((+price + (+price * +tip)) / +people).toFixed(2)
    span.textContent = totalPrice
    costInfo.style.display = 'block'
}

btn.addEventListener('click', check)