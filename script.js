const addFriendButton = document.querySelector(".add-friend");
const relation = document.querySelector(".relation");

addFriendButton.addEventListener("click", () => {
  if (
    addFriendButton.innerHTML ===
    '<i class="ri-subtract-fill"></i> Remove Friend'
  ) {
    addFriendButton.innerHTML = "Removed";
    setTimeout(() => {
      addFriendButton.innerHTML = '<i class="ri-add-line"></i> Add Friend';
      relation.innerHTML = "Stranger";
      relation.style.color = "red";
    }, 250);
  } else {
    addFriendButton.innerHTML = '<i class="ri-check-line"></i> Added';
    setTimeout(() => {
      addFriendButton.innerHTML =
        '<i class="ri-subtract-fill"></i> Remove Friend';
      relation.innerHTML = "Friend";
      relation.style.color = "green";
    }, 250);
  }
});
