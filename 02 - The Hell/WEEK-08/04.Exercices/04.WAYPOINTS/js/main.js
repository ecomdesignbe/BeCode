/* BASIC WAYPOINTS 

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')

const firstWP = new Waypoint({
  element: one,
  handler: function(direction) {
    console.log(direction)
  },
  offset : -100
})

const secondWP = new Waypoint({
  element: two,
  handler: function(direction) {
    console.log('secondWayPoints')
  },
  offset : 100
})
*/

/*
const  nav = document.getElementById('nav')

const navWP = new Waypoint ({
  element: nav,

  handler: function(direction) {
    if(direction === "down") {
      nav.classList.add("sticky")
      nav.classList.remove("nav")
    } else if(direction === "up") {
        nav.classList.add("nav")
        nav.classList.remove("sticky")
    }
  }
})
*/

const one = document.getElementById('one')
const two = document.getElementById('two')

const oneWP = new Waypoint({
  element: two,

  handler : function(direction) {
    if(direction === 'down') {
      alert('Are you sure ? Things are wild down there.')
    } else if (direction === 'up') {
        alert('I told you !')
    }
  }
})

