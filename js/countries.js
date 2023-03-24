const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
    console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
  console.log(countriesHTML);
};
const getCountryHTML = (country) => {
  return `
    <div class="country">
<h2>Country: ${country.name.common}</h2>
<h3>Capital: ${country.capital}</h3>
<h2>Population:
${country.population}</h2>
<h4>Maps: ${country.maps.googleMaps}</h4>
<img src="${country.flags.png}" alt="">
    </div>
    `;
};
loadCountries();
