
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById("city-input").value);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    //.fetchTodayForecast()
    .getThreeDaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      for(let i=0; i<4; i++){
      // On récupère l'information principale pour chaque jour
      const main = data.list[i].weather[0].main;
      const description = data.list[i].weather[0].description;
      const temp = data.list[i].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

      // Modifier le DOM
        document.getElementById('day' + (i+1) + '-forecast-main').innerHTML = main;
        document.getElementById('day' + (i+1) + '-forecast-more-info').innerHTML = description;
        document.getElementById('icon' + (i+1) + '-weather-container').innerHTML = icon;
        document.getElementById('day' + (i+1) + '-forecast-temp').innerHTML = `${temp}°C`;
      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
