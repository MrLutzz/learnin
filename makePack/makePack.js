$(".addBtn").click(showModalBox);
$("#saveModalBox").click(saveModalBox);


function showModalBox()
{
  $("#modalBox").show();

}

function saveModalBox()
{
  $("#modalBox").hide();

  //add a button that contains the card details
  var button = document.createElement("button");
  button.innerHTML  = "test";

  $( button ).insertBefore( $( ".addBtn" ) );

}
