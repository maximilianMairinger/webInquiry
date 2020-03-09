import ajax, { storage as sessionStorage } from "./ajax"

function now() {
  return Math.round(performance.now())
}


let defaultDelta = 16
const mouseMoveStorage = {
  data: [],
  defaultDelta

}

//@ts-ignore
global.mouseMoveStorage = mouseMoveStorage

let mouse = {
  x: 0,
  y: 0
}

let lastMouse = {x: 0, y: 0}
let lastTime = now()
setInterval(() => {
  if (lastMouse.x === mouse.x && lastMouse.y === mouse.y) return
  let currentTime = now()

  let delta = currentTime - lastTime
  let x = mouse.x - lastMouse.x
  let y = mouse.y - lastMouse.y

  if (delta === defaultDelta) {
    mouseMoveStorage.data.push({
      x,
      y
    })
  }
  else {
    mouseMoveStorage.data.push({
      delta,
      x,
      y
    })
  }
  

  draw(mouse.x, mouse.y)

  lastMouse.x = mouse.x
  lastMouse.y = mouse.y
  lastTime = currentTime
}, defaultDelta)

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x
  mouse.y = e.y

  

  
});






function draw(x: number, y: number) {
  let elem = document.createElement("div")
  elem.style.width = "2px"
  elem.style.height = "2px"
  elem.style.background = "red"
  elem.style.position = "absolute"
  elem.style.top = y + "px"
  elem.style.left = x + "px"
  elem.style.pointerEvents = "none"

  document.body.append(elem)


  setTimeout(() => {
    elem.remove()
  }, 2000)
}

window.addEventListener("mousedown", (e) => {
  
});

window.addEventListener("mouseup", (e) => {
  
});


(async () => {
  sessionStorage["userKey"] = (await ajax.post("createSession", {})).userKey


  await ajax.post("log", {ok: "okok"})


  
})()



