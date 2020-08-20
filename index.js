function getData() {
    const csvFilePath = './accounts1.csv' // Resource.csv in your case
    const csv = require('csvtojson') //. Make sure you have this line in order to call functions from this modules
    var i = 1;
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {

            var i = 0;
            //var https = 'https://www.faceit.com/fi/players/';
            jsonObj.forEach(obj =>
                .renameKey(obj, ';', 'id')
                .removeEverythingAfterSpace(obj));

            // jsonObj.forEach(obj => 
            console.log(jsonObj);
            //console.log(https + jsonObj[1].id + '/');

        })
}

function renameKey(obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];

}

function removeEverythingAfterSpace(obj) {
    let i = obj.id.length;
    obj.id = obj.id.slice(0, i - 2);

}

function addRankAndWebsite(obj) {
    obj['rank'] = '1';
}



getData();
