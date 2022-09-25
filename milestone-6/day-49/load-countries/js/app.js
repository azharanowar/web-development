const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries);

    const loadCountries = document.getElementById("loadCountries");

    countries.forEach(country => {
        const countryName = country.name?.common;
        const countryOfficialName = country.name?.official;
        const countryCapital = country.capital?.[0];
        
        const newCountryDivTag = document.createElement('div');
        newCountryDivTag.classList.add('country');
        newCountryDivTag.innerHTML = 
            `<h2>Country Name: ${countryName}</h2>
            <p>Official Name: ${countryOfficialName}</p>
            <p>Capital: ${countryCapital}</p>`;
        loadCountries.appendChild(newCountryDivTag);
    });
    
}

document.getElementById("loadCountriesBtn").addEventListener('click', () => {
    loadCountries();
    document.getElementById("loadCountriesBtn").disabled = true;
});