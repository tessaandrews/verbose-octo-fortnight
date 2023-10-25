const inquirer= require("inquirer")
const {Circle, Triangle, Square}= require("./lib/shapes")
const Logo=require("./lib/logo")
const fs=require("fs")



function init(){
    inquirer.prompt([{
        type:"input",
        name:"colorShape",
        message:"What color would you like your Logo to be?"
    },
{
    type:"input",
    name:"text",
    message:"Enter a text with no more than 3 Characters",
    validate:(text)=> text.length <=3 || "Text cannot have more than 3 characters"

}, {
    type:"list",
    name:"shapeOptions",
    message:"Which shape would you like for your Logo?",
    choices:["Circle", "Triangle", "Square"]
},
{
    type:"input",
    name:"colorText",
    message:"What color would you like your Text to be?"
},
]).then(({colorShape, text, shapeOptions, colorText })=>{

        
        let shape;
            switch (shapeOptions) {
                case "Circle":
                    shape= new Circle()
                    break;
                    case "Triangle":
                    shape= new Triangle()
                    break;
                default:
                    shape= new Square()
                    break;
            }

            shape.setColor(colorShape)

            const logo= new Logo()
            logo.setText(text, colorText)
            logo.setShape(shape)
                return fs.writeFileSync("./examples/logo.svg", logo.render())
        }).then(()=>{
            console.log("Logo has been generated");
        }).catch((err)=>{
            console.error(err)
        })
   

}

init()
