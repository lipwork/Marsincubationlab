function getData(){
    fetch('https://us-central1-mars-incubation-lab.cloudfunctions.net/getUploads')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });
}


