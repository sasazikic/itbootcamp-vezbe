

let cities = ["London", "Berlin", "Belgrade", "Madrid"]

cities.forEach((element, index) => {
    
})


for(let i = 0; i < cities.length; i++) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=2690bd82243540a18d5124758221901 &q=${cities[i]}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log(data));
}
