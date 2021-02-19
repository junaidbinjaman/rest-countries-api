const searchBtn = document.querySelector('.btn-search');
searchBtn.addEventListener('click', function(event) {
    const input = document.querySelector('.input').value;
    loadData()
    async function loadData() {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${input}`)
        const data = await res.json();
        displayData(data);
        return data
    }

    function displayData(data) {
        data.map(info => {

            const resultArea = document.querySelector('.result__container');
            resultArea.style.display = 'block';
            const result = `<div class="results">
                  <h2>SHowing Info For Bangladehs</h2>
                  <div class="result__row">
                      <div class="coll-6">
                          <h4>Country Name: ${input}</h4>
                          <h4>Top Domain: ${info.topLevelDomain}</h4>
                          <h4>Calling Code: ${info.callingCodes}</h4>
                      </div>
                      <div class="colr-6">
                          <h4>Capital: ${info.capital}</h4>
                          <h4>Population: ${info.population}</h4>
                          <h4>Continent: ${info.region}</h4>
                      </div>
                  </div>
              </div>`
            resultArea.innerHTML = result;
        })
    }

    // fetch(`https://restcountries.eu/rest/v2/name/${input}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         data.map(info => {

    //             const resultArea = document.querySelector('.result__container');
    //             resultArea.style.display = 'block';
    //             const result = `<div class="results">
    //             <h2>SHowing Info For Bangladehs</h2>
    //             <div class="result__row">
    //                 <div class="coll-6">
    //                     <h4>Country Name: ${input}</h4>
    //                     <h4>Top Domain: ${info.topLevelDomain}</h4>
    //                     <h4>Calling Code: ${info.callingCodes}</h4>
    //                 </div>
    //                 <div class="colr-6">
    //                     <h4>Capital: ${info.capital}</h4>
    //                     <h4>Population: ${info.population}</h4>
    //                     <h4>Continent: ${info.region}</h4>
    //                 </div>
    //             </div>
    //         </div>`
    //             resultArea.innerHTML = result;
    //         })
    //     })

})