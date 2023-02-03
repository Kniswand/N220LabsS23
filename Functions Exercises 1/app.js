// Define  bike
let bike = {
wear : 0,
age : 0,
color: "red",
make: "Huffy"
}

function ageUp(someBike) {
    someBike.age ++;
    if(someBike.age >=5) {
        someBike.wear = 100;

    }
}

ageUp(bike);
ageUp(bike);
ageUp(bike);
ageUp(bike);
ageUp(bike);

console.log(bike);