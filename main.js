let existing_ids = new Map();
data = [['Juan Gomez', '1940-12-01', 'Male', 'JUGO1940M'],
    ['Emily Green', '2000-06-30', 'Female', 'EMGR2000F']]
let i;
for (i = 0; i < data.length; i++) {
    record = data[i];
    name = record[0];
    dob = record[1];
    gender = record[2];
    identifier = record[3];
    let tempMap = new Map();
    tempMap.set('name', name);
    tempMap.set('dob', dob);
    tempMap.set('gender', gender);
    existing_ids.set(identifier, tempMap);
}

function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
        for (var i = 0; i < pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    return params;
}

params = getParams();
identifier = unescape(params["identifier"]);

if (existing_ids.has(identifier.toUpperCase())) {
    record = existing_ids.get(identifier.toUpperCase());
    name = record.get('name')
    dob = record.get('dob')
    gender = record.get('gender')
    document.getElementById("title").innerHTML = 'Patient found';
    detail = 'Name: ' + name + '</br>' + 'DOB: ' + dob + '</br>' + 'Gender: ' + gender + '</br>';
    document.getElementById("detail").innerHTML = detail;
} else {
    document.getElementById("detail").innerHTML = identifier;
}
