function solve() {

   let kingdoms = {};
   let kingdomsExisting = [];

   $('#kingdom button').on('click', () => {
      let kingdomNames = ['CASTLE', 'DUNGEON', 'FORTRESS', 'INFERNO', 'NECROPOLIS', 'RAMPART', 'STRONGHOLD', 'TOWER', 'CONFLUX']

      let kingdomName = $('#kingdom input')[0].value;
      let kingName = $('#kingdom input')[1].value;

      let upperKingdomName = kingdomName.toUpperCase();

      if (contains(kingdomName.toUpperCase(), kingdomNames) && kingName.length >= 2) {
         let kingdom = $(`#${kingdomName.toLowerCase()}`);

         let h1 = $("<h1>")
         h1.text(kingdomName.toUpperCase());
         kingdom.append(h1);

         let div = $('<div>')
         div.addClass('castle');
         kingdom.append(div);

         let h2 = $('<h2>')
         h2.text(kingName.toUpperCase());
         kingdom.append(h2);

         let fieldset = $('<fieldset>')
         fieldset.append(($('<legend>Army</legend><p>TANKS - 0</p><p>FIGHTERS - 0</p><p>MAGES - 0</p><div class="armyOutput"><div>')))
         kingdom.append(fieldset);

         kingdom.css('display', 'block')

         let kingdomObj = {
            kingdomName,
            kingName,
            Army: []
         }

         kingdoms[kingdomName] = kingdom
         kingdomsExisting.push(kingdomName);
      }
   })

   function contains(string, array) {
      return array.indexOf(string) > -1
   }



   $('#characters button').on('click', () => {
      let char = {};
      let charName = $('#characters input[type="text"]')[0].value;

      let charKingdom = $('#characters input[type="text"]')[1].value

      let type = $('input[type="radio"]:checked').each(function () {

      })
   })
}

solve()


