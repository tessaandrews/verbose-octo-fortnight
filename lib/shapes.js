class Shapes {
  constructor () {
    this.color = ""
  }
  setColor (color) {
    this.color=color
  }
}

  class Circle extends Shapes {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}


class Triangle extends Shapes {
    render(){
      return `<triangle cx= "150" cy= "100" r= "80" fill="${this.color}" />
      `
    }
    }


class Square extends Shapes {
    render(){
      return `<square cx="150" cy="100" width="80" height="30" fill="${this.color}"/>`
    }
    }

  module.exports = {Circle, Triangle, Square}
