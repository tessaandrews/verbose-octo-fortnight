const Logo = require("./logo")
const {Circle} = require("./shapes")

describe("Checking to see if  expected LOGO is correct ", ()=>{
test("Should render an SVG logo with a width of 300 and a height of 200", () => {
    const logo = new Logo ()
    const str= 'svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'
    expect (logo.render()).toMatch(str)
})
})

test("Should render text", () => {
    const logo = new Logo ()
    logo.setText("ABC","white")
    expect(logo.render()).toMatch('svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>')
})

test("Should set text message and color", () => {
    const logo = new Logo ()
    logo.setText("ABC","white")
    expect(logo.render()).toMatch('svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>')
})

test("Should include a shape", () => {
    const logo = new Logo ()
    logo.setText("ABC","white")
    const circle = new Circle ()
    circle.setColor("green")
    logo.setShape(circle)
    expect(logo.render()).toMatch('svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>')
})

test("If text is longer than 3 characters, it should throw an error", () => {
    const logo = new Logo ()
    expect(() => logo.setText("ABCD", "white")).toThrow(new Error("Text cannot have more than three characters!"))
})
