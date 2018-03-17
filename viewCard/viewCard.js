function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var id = getUrlParameter("id");
if(id!==null){
    id=0;
}
var pack = getUrlParameter("pack");
var firestore = firebase.firestore();

if(pack === undefined) pack = "Pack1";

var datastore = firestore.collection("Pack1").doc(pack);
var docData="nil";
var side=false;
var Title = $("#TITLE");
var Question = $("#QUESTION");
var Flip = $("#FLIP");
var Next = $("#N");
var Prev = $("#P");
Question.hide();
function update(){
    datastore.get().then(function(doc) {
        if (doc.exists) {
            docData=JSON.parse(doc.data().data);
            Title.text(docData.Name);
            try {
                Question.text(docData.Cards[id].Front);
                Question.fadeIn(200);
            } catch(e) {
                if (e instanceof TypeError) {
                    id=0;
                    Question.text(docData.Cards[id].Front);
                    Question.fadeIn(200);
                }
             }
        }else{
            console.log("Err");
        }
    });
}
update();
Next.click(function(){
    console.log("a");
    id=parseInt(id)+1;
    Question.fadeOut(200);
    update();
});
Prev.click(function(){
    id=parseInt(id)-1;
    Question.fadeOut(200);
    update();
});
Flip.click(function(){
    side = !side;
    if(side==false){
        Question.fadeOut(200,function(){Question.text(docData.Cards[id].Front); Question.fadeIn(400)});
    }else{
        Question.fadeOut(200,function(){Question.text(docData.Cards[id].Back); Question.fadeIn(400)});
    }
})
