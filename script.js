const apiKey = '4425b3080ea64965af422941241711';

async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('도시명을 입력해주세요');
        return;
    }

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert('날씨 정보를 가져오는데 실패했습니다. 도시명을 확인해주세요.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('날씨 정보를 가져오는데 실패했습니다.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.style.display = 'block';

    document.getElementById('city').textContent = data.location.name;
    document.getElementById('country').textContent = data.location.country;
    document.getElementById('weather-icon').src = `https:${data.current.condition.icon}`;
    document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('humidity').textContent = `${data.current.humidity}%`;
    document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;
}
