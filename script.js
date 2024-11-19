let embed13full = document.querySelector(embed);
function openEmbed(evt, embed) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(embed).style.display = "block";
  evt.currentTarget.className += " active";
}



function reloadPage() {
  window.location.reload();
}
