import "./styles.css";

function myFunction() {
  document.getElementById("demo").style.color = "red";
}

document.getElementById("board").innerHTML = `
<p id="player">Player 1</p>
<div class="progress">
<div class="determinate" id='uusibaari' style="width: 0%"></div>
</div>
<div class='row y'>
 <div id="11" class="col s1 x" onclick="myFunction()">-</div>
 <div id="12" class="col s1 x" onclick="myFunction()">-</div>
 <div id="13" class="col s1 x" onclick="myFunction()">-</div>
 <div id="14" class="col s1 x" onclick="myFunction()">-</div>
 <div id="15" class="col s1 x" onclick="myFunction()">-</div>
</div>
<div class='row y'>
 <div id="21" class="col s1 x" onclick="myFunction()">-</div>
 <div id="22" class="col s1 x" onclick="myFunction()">-</div>
 <div id="23" class="col s1 x" onclick="myFunction()">-</div>
 <div id="24" class="col s1 x" onclick="myFunction()">-</div>
 <div id="25" class="col s1 x" onclick="myFunction()">-</div>
 </div>
 <div class='row y'>
 <div id="31" class="col s1 x" onclick="myFunction()">-</div>
 <div id="32" class="col s1 x" onclick="myFunction()">-</div>
 <div id="33" class="col s1 x" onclick="myFunction()">-</div>
 <div id="34" class="col s1 x" onclick="myFunction()">-</div>
 <div id="35" class="col s1 x" onclick="myFunction()">-</div>
 </div>
 <div class='row y'>
 <div id="41" class="col s1 x" onclick="myFunction()">-</div>
 <div id="42" class="col s1 x" onclick="myFunction()">-</div>
 <div id="43" class="col s1 x" onclick="myFunction()">-</div>
 <div id="44" class="col s1 x" onclick="myFunction()">-</div>
 <div id="45" class="col s1 x" onclick="myFunction()">-</div>
 </div>
 <div class='row y'>
 <div id="51" class="col s1 x" onclick="myFunction()">-</div>
 <div id="52" class="col s1 x" onclick="myFunction()">-</div>
 <div id="53" class="col s1 x" onclick="myFunction()">-</div>
 <div id="54" class="col s1 x" onclick="myFunction()">-</div>
 <div id="55" class="col s1 x" onclick="myFunction()">-</div>
</div>
`;
