var currentCard;

$(".addBtn").click(showModalBox);
$("#saveCard").click(saveCard);
$("#deleteCard").click(deleteCard);
$("#savePack").click(savePack);
$("#deletePack").click(deletePack);

function hasCardData(button)
{
  return button.hasAttribute("data-front") && button.hasAttribute("data-back");
}

function showModalBox(event)
{
  $("#modalBox").show();
  $("#front").val("");
  $("#back").val("");

  currentCard = event.currentTarget;

  if(hasCardData(currentCard))
  {
    var front = currentCard.attributes[0].value;
    var back = currentCard.attributes[1].value;
    $("#front").val(front);
    $("#back").val(back);
  }
}

function saveCard()
{
  var front = $("#front").val();
  var back = $("#back").val();

  //validation check
  if(front === "" || back === "") return;

  $("#modalBox").hide();

  //update existing card
  if(hasCardData(currentCard))
  {
    $(currentCard).attr("data-front", front);
    $(currentCard).attr("data-back", back);
    currentCard.innerHTML = front;
    return;
  }

  //add a button that contains the card details
  var button = document.createElement("button");
  $(button).attr("data-front", front);
  $(button).attr("data-back",  back);
  button.innerHTML = front;

  $(button).insertBefore( $( ".addBtn" ) );
  $(button).click(showModalBox);
}

function deleteCard(event)
{
  if(hasCardData(currentCard))
  {
    $("#modalBox").hide();
    currentCard.remove();
    currentCard = null;
  }
}

function savePack()
{
  var cards = document.getElementsByTagName("button");

  for(var i=0;i<cards.length;i++)
  {
    if(hasCardData(cards[i]))
    {
      var front = cards[i].getAttribute("data-front");
      var back = cards[i].getAttribute("data-back");

      //add to database
      console.log(front+" "+back);
    }
  }
}

function deletePack()
{

}
