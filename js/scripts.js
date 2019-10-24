function showSuprise() {
  var suprise = document.getElementsByClassName('one')[0];
  console.log(suprise.classList);
  console.log(window.getComputedStyle(suprise).style);
  suprise.classList.toggle('isVisible')
}