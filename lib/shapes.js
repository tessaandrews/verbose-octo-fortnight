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
      return `<polygon points="200,10 260,190 130,200 fill="${this.color}" />
      `
    }
    }


class Square extends Shapes {
    render(){
      return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
    }

  module.exports = {Circle, Triangle, Square}