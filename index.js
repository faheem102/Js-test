

// Step--1

const dishes = ["Spaghetti", "Lasagne", "Beans on toast", "Porridge", "Tomato Soup", "Salmon"];
dishes.forEach((element)=>{
    console.log(element);
})

//Step--2

const myButton = document.createElement("button");
const myHeading = document.createElement("h1")
myHeading.innerHTML = "Javascript Test"
myButton.innerHTML = "Click Me"
document.body.appendChild(myButton)
function buttonClicked(){
    document.body.appendChild(myHeading)
    document.body.style.background = "pink"
}

myButton.addEventListener("click", buttonClicked)

/

    //Step--4

    class Person {
        constructor(firstname){
            this.firstname = firstname
        }
        sayHello(){
            console.log(`Hello my name is ${this.firstname}`)
        }
    }

    const myName = new Person("Faheem")
    console.log(myName.sayHello())

    //Step--3

    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(myData => {
        for(i=0; i<myData.data.length; i++){
            console.log(myData.data[i].first_name)
        }
        
        
        
    })