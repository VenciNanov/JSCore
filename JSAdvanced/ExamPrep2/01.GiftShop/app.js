function solution() {
	let typeEl = $('#toyType');
	let priceEl = $('#toyPrice');
	let descriptionEl = $('#toyDescription');
	let button = $('button');

	let giftsSection = $('#christmasGiftShop');


	button.on('click', () => {
		let type = typeEl.val();
		let price = priceEl.val();
		let description = descriptionEl.val();
		if (type && price && description) {
			if (type && !isNaN(price) && !price.startsWith('-') && description.length <= 50) {


				let div = $('<div>');
				div.addClass('gift');

				let img = $('<img>');
				img.attr('src', 'gift.png');
				div.append(img);

				let h2 = $('<h2>');
				h2.text(type);
				div.append(h2);

				let p = $('<p>');
				p.text(description);
				div.append(p);

				let btn = $('<button>');
				btn.text(`Buy it for $${price}`)
				btn.on('click', (e) => {
					e.target.parentNode.remove();
				})
				div.append(btn)

				giftsSection.append(div);

				typeEl.val('');
				descriptionEl.val('');
				priceEl.val('')




			}
		}
	})
}