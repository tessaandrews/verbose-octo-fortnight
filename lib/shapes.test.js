const {Circle, Triangle, Square} = require("./shapes")

test("Should render a black circle SVG",() => {
  const circle = new Circle ()
  circle.setColor("black")
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black" />')
})