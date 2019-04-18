function solve() {
   let courses = {
      fundamentals: 170,
      advanced: 180,
      applications: 190,
      web: 490
   };



   let myCourses = $('.courseBody');

   $('button').on('click', () => {
      let $educationForm = $('#educationForm input');

      let checkedCourses = [];

      let $markedCourses = $('#availableCourses .courseBody ul li');
      for (const course of $markedCourses) {
         if (course.children[0].checked) {
            let courseName = course.children[1].textContent;
            appendCourseToBody(courseName);

            checkedCourses.push(courseName.split(' ')[1].toLowerCase());
         }
      }

      if (checkedCourses.length === 4) {
         appendCourseToBody('HTML and CSS');
      }

      for (const type of $educationForm) {
         if (type.checked) {
            calculateCost(checkedCourses, type.value, courses);
         }
      }

      for (const $course of $markedCourses) {
         $course.children[0].checked = false;
      }

      $checkedCourses = [];
   })

   function calculateCost(checkedCourses, form, coursePrices) {

      if (checkedCourses.includes('advanced') && checkedCourses.includes('fundamentals')) {
         checkedCourses['advanced'] = +checkedCourses['advanced'] * 0.90;
      }

      if (checkedCourses.includes('advanced') && checkedCourses.includes('fundamentals') && checkedCourses.includes('applications')) {
         checkedCourses['fundamentals'] = +checkedCourses['fundamentals'] * 0.94;
         checkedCourses['advanced'] = +checkedCourses['advanced'] * 0.94;
         checkedCourses['applications'] = +checkedCourses['applications'] * 0.94;
      }

      if (form === 'online') {
         for (const course of checkedCourses) {
            coursePrices[course] = coursePrices[course] - (coursePrices[course] * 0.06);
         }
      }
      let price = 0;

      for (const course of checkedCourses) {
         price += coursePrices[course]
      }

      $('.courseFoot p').text('Cost: ' + Math.floor(price) + '.00 BGN');

   }
   function appendCourseToBody(courseName) {
      let courseBody = $('#myCourses .courseBody ul');

      let li = $('<li>');
      li.text(courseName.split(' - ')[0].replace(' ', '-'));

      courseBody.append(li);
   }

   function isChecked($courseInput) {
      return $courseInput.checked;
   }


}

solve();