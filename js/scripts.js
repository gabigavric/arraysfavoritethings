
$(document).ready(function() {

  $("form").submit(function(event) {
    var myList = [];

    console.info("received form");
    myList.push($("input#favorite1").val());
    myList.push($("input#favorite2").val());
    myList.push($("input#favorite3").val());
    console.info(myList);
    // creating new array
    var myList2 = []
    myList2.push(myList[1]);
    myList2.push(myList[0]);
    myList2.push(myList[2]);
    console.info(myList2);
    $('#fav-list li').each(function (i) {
        $(this).text(myList2[i]);
    });
    event.preventDefault();

  });
});
