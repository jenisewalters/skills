$( document ).ready(function() {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function (){

    if (request.readyState === 4) {
      var treeHouse = JSON.parse(request.responseText);
      var skillsHTML = "<div class='badge-container'>";


      for (var i=0;i < treeHouse.badges.length; i+=1)
      {
         var badgeName = treeHouse.badges[i].name;
         var imgUrl = treeHouse.badges[i].icon_url;
         skillsHTML += "<div class='col-sm-4 badge-item'><div class='badge-box'><img class='img-responsive' src='" + imgUrl + "''><div class='badge-title'>"  + badgeName  + "</div></div></div>";

      }
      skillsHTML += "</div>";

      document.getElementById('skillsList').innerHTML = skillsHTML;
    }

  };





  request.open ("GET", "https://teamtreehouse.com/jenisewalters.json",true);
  request.send();
});
