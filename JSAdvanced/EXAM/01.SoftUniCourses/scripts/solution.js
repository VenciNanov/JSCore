function solve() {
   let button = $('button');

   let coursesEnrolled = [];
   let educationForm = [];

   let cost = 0;
   button.on('click', () => {
      let selected = [];

      let coursesElements = $('input[type="checkbox"]:checked').each(function () {
         selected.push($(this).val())
      })

      let type = $('input[type="radio"]:checked').val();

      let myCourses = $('.courseBody ul')[1];

      Array.from(selected).forEach(item => {
         if (item == 'js-fundamentals') {

            let li = document.createElement('li');
            li.textContent = 'JS-Fundamentals'
            myCourses.appendChild(li)
            if (type === 'online') {
               cost += (170 * 0.94)
            } else {

               cost += 170;
            }
            coursesEnrolled.push('js-fundamentals');

         }
         if (item == 'js-advanced') {
            let li = document.createElement('li');
            li.textContent = 'JS-Advanced'
            myCourses.append(li)
            if (selected.includes('js-fundamentals')) {
               let dicountedPrice = 180 * 0.90;
               if (type === 'online') {
                  cost += (dicountedPrice * 0.94)
               } else {
                  cost += dicountedPrice;
               }

            } else {
               if (type === 'online') {
                  cost += (180 * 0.94)
               } else {
                  cost += 180;
               }
            }
            coursesEnrolled.push('js-advanced');
         }
         if (item == 'js-applications') {
            let li = document.createElement('li');
            li.textContent = 'JS-Applications'
            myCourses.appendChild(li)
            if (type === 'online') {
               cost += (190 * 0.94)
            } else {
               cost += 190;
            }
            if (selected.includes('js-fundametnals') && selected.includes('js-advanced') && selected.includes('js-applications')) {
               cost = cost * 0.94;
            }
            coursesEnrolled.push('js-applications');
         }
         if (item == 'js-web') {
            let li = document.createElement('li');
            li.textContent = 'JS-Web'
            myCourses.appendChild(li)

            if (type === 'online') {
               cost += (490 * 0.94)
            } else {
               cost += 490;
            }
            coursesEnrolled.push('js-web');
         }

      });


      if (coursesEnrolled.includes('js-fundamentals') && coursesEnrolled.includes('js-advanced') && coursesEnrolled.includes('js-applications') && coursesEnrolled.includes('js-web')) {
         let li = document.createElement('li');
         li.textContent = 'HTML and CSS';
         myCourses.appendChild(li);
      }

      let costElement = $('#myCourses .courseFoot p');
      console.log(cost)
      costElement.text(`Cost: ${Math.floor(cost).toFixed(2)} BGN`)
   })


}

solve();