const colors = document.querySelector('#colors')
const table = document.querySelector('#table_rows')
const tableRows = document.querySelectorAll('.item')

for (let i = 0; i < tableRows.length; i++) {
	if (i % 2 === 0) {
		tableRows[i].classList.add('bg-[#d9d9d9]')
	}
}

function checkOtherColors() {
	const colors = document.querySelectorAll('.color')
	let result = null
	colors.forEach(item => {
		if (item.classList.contains('select_color')) result = item
	})
	if (result) {
		return result
	} else {
		return false
	}
}

function getSelectedColor() {
	const colors = document.querySelectorAll('.color')
	let resultItem = null
	colors.forEach(item => {
		if (item.classList.contains('select_color')) {
			resultItem = item
		}
	})
	return resultItem
}

colors.addEventListener('click', event => {
	if (event.target.closest('.color')) {
		if (event.target.classList.contains('select_color')) {
			event.target.classList.remove('select_color')
		} else {
			let item = checkOtherColors()
			if (item) {
				item.classList.remove('select_color')
			}
			event.target.classList.add('select_color')
		}
	}
})

table.addEventListener('click', event => {
	if (event.target.closest('.item')) {
		const colorItem = getSelectedColor()
		let result = null
		colorItem.classList.forEach(item => {
			if (!item.indexOf('bg-')) {
				result = item
			}
		})
		event.target.classList.forEach(clasS => {
			if (!clasS.indexOf('bg-')) {
				event.target.classList.remove(clasS)
			}
		})
		event.target.classList.remove('bg-[#d9d9d9]')
		event.target.classList.add(result)
	}
})
