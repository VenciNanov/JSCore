function addProduct() {
    let inputs = $('#add-product label input');
    debugger;
    let productListEl = $('#product-list');

    let totalPriceEl = $('#bill tfoot tr td')[1];

    let productInput = inputs[0].value;
    let priceEl = inputs[1].value;

    if (productInput && priceEl && +priceEl > 0&&productInput!==" ") {
        let price = +priceEl;
        let totalPrice =totalPriceEl.textContent;

        totalPrice = +totalPrice + +price;

        let row = $('<tr>');
        row.append($(`<td>${productInput}</td><td>${price}</td>`))

        totalPriceEl.textContent = totalPrice;

        productListEl.append(row);

        inputs[0].value = "";
        inputs[1].value = "";
    }
}