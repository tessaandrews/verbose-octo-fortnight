const {Circle, Triangle, Square} = require("./shapes")

test("Should render a black circle SVG",() => {
  const circle = new Circle ()
  circle.setColor("black")
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black" />')
})

test("Should render a green triangle SVG",() => {
  const triangle = new Triangle ()
  triangle.setColor("green")
  expect(triangle.render()).toEqual('<triangle cx="150" cy="100" r="80" fill="green" />')
})

test("Should render a white square SVG",() => {
  const square = new Square ()
  square.setColor("white")
  expect(square.render()).toEqual('<square cx="150" cy="100" r="80" fill="white" />')
})