let age = "2";

let tt = typeof(age)
console.log(tt)

if (typeof(age) == "19") {
    if (age >= 18 && age < 60) {

        console.log("Full content")
    }
    else if (age < 18 ) {

        console.log("Multiki")
    }
    else if (age >= 60) {
        console.log("Kultura")
    } else {
        console.log("Good luck!")
    }
}
