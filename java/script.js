const sdbr = document.querySelectorAll('sidebar');
function openNav() {
    document.getElementById("sidebar").style.width = "275px";
    document.getElementById("sidebar").style.borderRight = "solid 1pt black";
  }

  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.border = "none";
  }
