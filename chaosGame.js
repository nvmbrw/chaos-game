let cx = document.querySelector('canvas').getContext('2d')

cx.fillStyle = 'red'

const pixel = (x, y) => cx.fillRect(x, y, 1, 1)
const bigDot = (x, y) => cx.fillRect(x, y, 4, 4)

const A = [450, 190],
  B = [150, 710],
  C = [750, 710]

bigDot(A[0], A[1])
bigDot(B[0], B[1])
bigDot(C[0], C[1])

const vertices = [A, B, C]

const midpoint = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]

const pickVertex = () => vertices[Math.round(Math.random() * 2)]
console.log(pickVertex())
const getNewPos = oldPos => midpoint(oldPos, pickVertex())

const playGame = iterations => {
  const startVertex = pickVertex()
  let currentPos = startVertex.slice()
  for (let i = 0; i < iterations; i++) {
    currentPos = getNewPos(currentPos)
    pixel(currentPos[0], currentPos[1])
  }
}

playGame(10000)
