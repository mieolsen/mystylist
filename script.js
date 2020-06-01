// JavaScript Document

function styleFunction() { document.getElementById("styleDropdown").classList.toggle("visboks");
}

function behandlingFunction() { document.getElementById("behandlingDropdown").classList.toggle("visboks");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropknap1'  ) && !event.target.matches('.dropknap2' )) {
    var dropdowns = document.getElementsByClassName("indhold");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('visboks')) {
        openDropdown.classList.remove('visboks');
      }
    }
  }
}