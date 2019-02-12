function solve() {
  let btns = document.querySelectorAll("button");

  let textAreas = document.querySelectorAll("textarea");

  let log = textAreas[2];

  let loadBtn = btns[0];
  let buyBtn = btns[1];

  let products = [];

  let profit = 0;

  loadBtn.addEventListener("click", () => {
    let inputProducts = JSON.parse(textAreas[0].value);

    Array.from(inputProducts).forEach((p) => {
      let productExists = Array.from(products).some((pr) => {
        let name = pr["name"];
        if (name === p["name"]) return true;
        return false;
      });

      if (productExists === false) {
        products.push(p);
      } else {
        products = Array.from(products).map(x => {
          if (e["name"] === p["name"]) {
            return p;
          }
          return e;
        });
      }
    });

    Array.from(products).forEach((p) => {
      log.value += `Successfully added ${p["quantity"].toString()} ${p["name"].toString()}. Price: ${p["price"].toString()}\n`;
    });
  });

  buyBtn.addEventListener("click", () => {
    let order = JSON.parse(textAreas[1].value);

    let isProductInStock = Array.from(products).some((pr) => {
      if (order["name"] === pr["name"] && parseInt(pr["quantity"]) >= parseInt(order["quantity"])) {
        return true;
      }
      return false;
    });
    if (isProductInStock === true) {
      Array.from(products).forEach((pr) => {
        if (pr["name"] === order["name"]) {
          let totalPrice = parseFloat(pr["price"]) * parseFloat(order["quantity"]);
          profit += parseFloat(totalPrice);
          pr["quantity"] -= parseInt(order["quantity"]);

          log.value += `${order["quantity"].toString()} ${order["name"]} sold for ${totalPrice.toString()}.\n`;
        }
      });
    } else {
      log.value += "Cannot complete order.\n";
    }

  });

  let endBtn = btns[2];
  endBtn.addEventListener("click", () => {
    log.value += `Profit: ${profit.toFixed(2).toString()}.\n`;

    loadBtn.disabled = true;
    buyBtn.disabled = true;
    endBtn.disabled = true;
  })

}