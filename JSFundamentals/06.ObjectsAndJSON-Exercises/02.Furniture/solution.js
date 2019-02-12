function solve() {
  function capitalizeFirtLetter(word) {
    let tempWord = word.slice(0);

    tempWord = tempWord.split("").map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase();
      } else {
        return letter;
      }
    }).join("");

    return tempWord;
  }
  function defineParamName(text, key) {
    let firstWord = capitalizeFirtLetter(key);
    if (key === "decFactor") {
      return `Decoration factor: ${text.toString()}`;
    } else {
      return `${key.toString()}: ${text.toString()}`
    }

  }
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  function getChildInfo(name, ch) {
    let split = ch.textContent.split(": ");

    let childName = split[0];
    let childValue = split[1];

    if (childName.toLowerCase() === name) {
      return childValue;
    }
  }
  let buttons = document.querySelectorAll("button");
  let furnitureList = document.getElementById("furniture-list");

  let generateBtn = buttons[0];
  let buyBtn = buttons[1];

  generateBtn.addEventListener("click", () => {
    let textAresElements = document.querySelectorAll("textarea");

    let inputAreaArray = JSON.parse(textAresElements[0].value);

    Array.from(inputAreaArray).forEach((element) => {
      let div = document.createElement("div");
      div.classList.add("furniture");

      Object.keys(element).forEach((key) => {
        if (key === "img") {
          let img = document.createElement("img");
          img.src = element[key];

          div.appendChild(img);
        } else {
          let p = document.createElement("p");
          p.textContent = defineParamName(element[key], key);

          div.appendChild(p);
        }
      });
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";

      div.appendChild(checkBox);
      furnitureList.appendChild(div);
    })
  });
  
  let decorFactorSum = 0;
  let decorFactorCount = 0;

  let boughtProductsObj = {};
  buyBtn.addEventListener("click", () => {

    let furniture = document.querySelectorAll(".furniture");

    let checkedEl = Array.from(furniture).slice(0);
    checkedEl = Array.from(furniture).filter((array) => {
      return Array.from(array.children).some((x) => {
        if (x.type === "checkbox") {
          return x.checked === true;
        } else {
          return false;
        }
      })
    });

    Array.from(checkedEl).forEach((key) => {
      let name = Array.from(key.children).map((x) => getChildInfo("name", x)).filter(x => x).toString();
      let price = Array.from(key.children).map((x) => getChildInfo("price", x)).filter(x => x).toString();
      let decFactor = Array.from(key.children).map((x) => getChildInfo("decoration factor", x)).filter(x => x).toString();


      decorFactorSum += parseFloat(decFactor);
      decorFactorCount++

      if (boughtProductsObj[name] === undefined) {
        boughtProductsObj[name] = price;
      } else {
        let futureSum = parseFloat(boughtProductsObj[name]) + parseFloat(price);
        boughtProductsObj[name] = futureSum;
      }
    });

    let products = Object.keys(boughtProductsObj).map((key) => { return key; });
    let totalPrice = 0;
    if (Object.values(boughtProductsObj).length === 1) {
      totalPrice = parseFloat(Object.values(boughtProductsObj)[0]).toFixed(2);
    } else {
      totalPrice = Object.values(boughtProductsObj).reduce((sum, num) => parseFloat(sum) + parseFloat(num)).toFixed(2);
    }

    let averageDecorFactor = parseFloat(decorFactorSum)/parseInt(decorFactorCount);

    let textAreaOutput = document.querySelectorAll("textarea")[1];

   // let furnituree = boughtFurniture.filter(onlyUnique);
    textAreaOutput.textContent += `Bought furniture: ${products.join(", ")}\n`;
    textAreaOutput.textContent += `Total price: ${totalPrice.toString()}\n`;
    textAreaOutput.textContent += `Average decoration factor: ${averageDecorFactor.toString()}`

  });

}
