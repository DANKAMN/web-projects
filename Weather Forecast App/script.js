const key = "9da659edac05eba227237a1fe8b08b4c";

const formElement = document.querySelector('form');
const details = document.querySelector('.details');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    details.innerHTML = '<h1>Loading...</h1>';

    const location = e.target.location.value;
    weatherApp(location);
});

async function weatherApp(location) {
    const data = await fetchApi(location);

    generateHTML(data);
}

async function fetchApi(location) {
    const baseUrl = `http://api.weatherstack.com/current?access_key=${key}&query=${location}`;

    const res = await fetch(baseUrl);
    const data = await res.json();
    console.log(data);
    return data;
}

function generateHTML(data) {
    const html = `
    <h1 class="temp">${data.current.temperature}°C</h1>
    <h1 class="status">${data.current.weather_descriptions.map(item => item).join('' )}</h1>
    <div class="more-info">
        <p>Humidity- ${data.current.humidity}%</p>
        <p>Speed- ${data.current.wind_speed}km/h</p>
        <p>Wind Direction- ${data.current.wind_dir}</p>
        <p>Pressure- ${data.current.pressure}MB</p>
    </div>
    <div class="query">${data.request.query}</div>
    `;

    details.innerHTML = html;
}