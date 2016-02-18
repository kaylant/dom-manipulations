
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  var button = document.querySelector("button")
  button.onclick=alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var number = document.querySelector("#compoundInvestment")
  number.innerHTML = number.innerHTML * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector("#circle-bw")
  if (circle.style.background === "black") {
  	circle.style.background = "white"
  }
  else {
  	circle.style.background = "black"
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4
  var circle2 = document.querySelector(".circle-red")
  var circle2styles = window.getComputedStyle(circle2)

  var origWidth = parseInt(circle2styles.width)
  circle2.style.width = (origWidth * 2) + 'px'

  var origHeight = parseInt(circle2styles.height)
  circle2.style.height = (origHeight * 2) + 'px'

  if(origWidth >= 320){
  	circle2.style.width = 40 + 'px'
  	circle2.style.height = 40 + 'px'
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userList = document.querySelector("#userList")
  var inactiveItems = document.querySelectorAll(".inactive")
	while (inactiveItems.length) {
	    userList.removeChild(inactiveItems[0])
	    var inactiveItems = document.querySelectorAll(".inactive")
	}
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6a
  var squareContainer = document.querySelector("#reverse-squares .answer-box")
  var bunchoSquares = document.querySelectorAll(".square")
  for (var i = bunchoSquares.length; i--;) {
  		squareContainer.appendChild(bunchoSquares[i])  
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var taskList = document.querySelector("#tasks")
  var listItems = document.querySelectorAll("#tasks li")

  for (var i = 0; i < listItems.length; i++) {
    var listItemContent = listItems[i].textContent
    var newListItemContent = listItemContent.split('').reverse().join('')
    listItems[i].textContent = newListItemContent
  }
  
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var imgFlipper = document.querySelector('#cycle-image .answer-box')
  // var image = document.querySelector('#cycle-image .answer-box img')


  imgFlipper.innerHTML = '<img src="http://lorempixel.com/400/200/city/"/>' 
})