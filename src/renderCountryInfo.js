let renderCountryInfo = '';
export default renderCountryInfo = countries => {
    const countryInfo = document.querySelector(".country-info");
 
    const markup = countries
        .map(country => {
        
            const {
                name: { official },
                capital,
                population,
                languages,
                flags: { svg }
            } = country;
          
          return (countryInfo.innerHTML =
            `<li class="country-info-item">
                 <img class= "country-info__flag" src="${svg}" alt="Icon of ${official}'s flag." width="60px" height="60px">
                 <h2 class= "country-info__heading">${official}</h2>
                 <div class="country-info-list__wrapper"
                 <ol class="country-info__list">
                   <li class="country-info__item"><b>Capital:</b> ${capital}
                   </li>
                   <li class="country-info__item"><b>Population:</b> ${population}
                   </li>
                   <li class="country-info__item"><b>Language(s):</b> ${Object.values(languages).map(languages => " " + languages.name)}; 
                   </li>
                 </ol>
                 </div>
               </li>`);
        })
        .join("");
    countryInfo.innerHTML = markup;
};  

// <li><p>Languages: ${country.languages.map(languages => " " + languages.name)}</p></li>


// ${Object.values(languages).map(languages => " " + languages.name)};