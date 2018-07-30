let cx = document.querySelector('canvas').getContext('2d')

cx.fillStyle = 'red'

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  midpointTo(a) {
    return Point.midpoint(this, a)
  }
  static midpoint(a, b) {
    return new Point(Math.round((a.x + b.x) / 2), Math.round((a.y + b.y) / 2))
  }
}

const pixel = point => cx.fillRect(point.x, point.y, 1, 1)
const bigDot = point => cx.fillRect(point.x, point.y, 1, 1)

const A = new Point(450, 190),
  B = new Point(150, 710),
  C = new Point(750, 710)

bigDot(A)
bigDot(B)
bigDot(C)

const vertices = [A, B, C]

const pickVertex = () =>
  vertices[Math.round(Math.random() * (vertices.length - 1))]

const getNewPoint = oldPoint => oldPoint.midpointTo(pickVertex())

const playGame = iterations => {
  const startVertex = pickVertex()
  let currentPos = startVertex
  for (let i = 0; i < iterations; i++) {
    currentPos = getNewPoint(currentPos)
    pixel(currentPos)
  }
}

playGame(100000)
