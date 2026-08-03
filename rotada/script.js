const startCity = document.getElementById("startCity");
const endCity = document.getElementById("endCity");

async function loadCities() {

    try {

        const response = await fetch("data/cities.json");

        const cities = await response.json();

        cities.forEach(city => {

            const option1 = document.createElement("option");
            option1.value = city;
            option1.textContent = city;

            startCity.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = city;
            option2.textContent = city;

            endCity.appendChild(option2);

        });

    }

    catch(error){

        console.error(error);

    }

}

loadCities();