
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
var pack = getUrlParameter("pack");
var firestore = firebase.firestore();
var datastore = firestore.doc("Pack1/"+pack);

function getData(cardId,cardPack){
    datastore.get().then(function(doc){
        if(doc && doc.exists){
            const docData = doc.data();
            
        }else{
            console.log("Whoops");
        }
    });
}

console.log(getData("1","cardPack"));

var Title = $("#TITLE");
var Question = $("#QUESTION");
var Flip = $("#FLIP");