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
const addStopButton = document.getElementById("addStop");
const stopsContainer = document.getElementById("stopsContainer");
const calculateButton = document.getElementById("calculate");

let stopCount = 0;

addStopButton.addEventListener("click",()=>{

    stopCount++;

    const row=document.createElement("div");

    row.className="stop-row";

    const select=document.createElement("select");

    select.innerHTML=startCity.innerHTML;

    const remove=document.createElement("button");

    remove.textContent="✕";

    remove.className="remove-stop";

    remove.onclick=()=>{

        row.remove();

    };

    row.appendChild(select);

    row.appendChild(remove);

    stopsContainer.appendChild(row);

});
calculateButton.addEventListener("click",()=>{

    if(startCity.selectedIndex===0){

        alert("Başlangıç şehrini seçiniz.");

        return;

    }

    if(endCity.selectedIndex===0){

        alert("Varış şehrini seçiniz.");

        return;

    }

    if(startCity.value===endCity.value){

        alert("Başlangıç ve varış aynı olamaz.");

        return;

    }

    document.getElementById("distance").textContent="453 km";

    document.getElementById("duration").textContent="5 Saat 18 Dakika";

    document.getElementById("traffic").textContent="Normal";

    document.getElementById("weather").textContent="24°C";

});