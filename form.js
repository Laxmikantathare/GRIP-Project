

var table = document.getElementById("table"),
  rIndex;
let arr = [];
for (var i = 1; i < table.rows.length; i++) {
  table.rows[i].onclick = function () {
    rIndex = this.rowIndex;
    console.log(rIndex);

    document.getElementById("fname").value = this.cells[0].innerHTML;
    document.getElementById("lname").value = this.cells[1].innerHTML;

    let curbal = this.cells[2].innerHTML;
    arr.push(curbal);
  };
}

function visi() {
  document.getElementById("vis").style.visibility = "visible";
  alert("Now enter amount and cllick send");
}
function visi2() {
  document.getElementById("vis").style.visibility = "hidden";
}

function editRow() {
  table.rows[rIndex].cells[0].innerHTML =
    document.getElementById("fname").value;
  table.rows[rIndex].cells[1].innerHTML =
    document.getElementById("lname").value;

  let curbal = parseInt(arr);

  table.rows[rIndex].cells[2].innerHTML =
    curbal + parseInt(document.getElementById("age").value);
  console.log(typeof curbal);

  document.getElementById("fname").value = "";
  document.getElementById("age").value = "";
  document.getElementById("lname").value = "";
  arr = [];
  visi2();
  arr = [];

}
arr = [];

  setTimeout(function () {
    alert("Now again select one user to send money ");
  }, 500)

;


var createPTag = document.createElement("li");
var textNode =
  document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@gmail.com
  to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
createPTag.appendChild(textNode);
var element = document.getElementById("transaction-history-body");
element.insertBefore(createPTag, element.firstChild);
