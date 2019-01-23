function solve() {
   let profiles = document.getElementById("exercise").children;

   let user1 = profiles[0];
   let user2 = profiles[1];
   let user3 = profiles[2];

   showHideHiddenInformation(user1, "user1HiddenFields");
   showHideHiddenInformation(user2, "user2HiddenFields");
   showHideHiddenInformation(user3, "user3HiddenFields");

   function showHideHiddenInformation(user, hiddenFields) {

      let userBtns = user.getElementsByTagName("input");

      let lockButton = userBtns[0];
      let unlockButton = userBtns[1];
      //
      unlockButton.addEventListener("click", () => {
         lockButton.removeAttribute("checked");
         unlockButton.setAttribute("checked", "");
      });

      lockButton.addEventListener("click", () => {
         unlockButton.removeAttribute("checked");
         lockButton.setAttribute("checked", "");
      });
      //
      let showHideButton = user.querySelector("button");
      let hiddenInfo = document.getElementById(hiddenFields);

      showHideButton.addEventListener("click", () => {
         if (lockButton.hasAttribute("checked") == false && unlockButton.hasAttribute("checked") == true) {
            if (showHideButton.textContent == "Show more") {
               hiddenInfo.style.display = "block";
               showHideButton.textContent = "Hide it";
            }
            else {
               hiddenInfo.style.display = "none";
               showHideButton.textContent = "Show more";
            }
         }
      });
   }
} 