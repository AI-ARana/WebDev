function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBE3T67Z4iRxXrWjDeOCwjR2nv_VxF0fuA',
        clientId: '705244001600-mutltkk6h7b5lkbhs8q62umn395mfs9f.apps.googleusercontent.com',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets"
    }).then(() => {
        // Listen to room and current meter reading changes
        document.getElementById('room').addEventListener('change', loadPreviousData);
        document.getElementById('currentMeter').addEventListener('input', calculateTotalUnits);
    });
}

function loadPreviousData() {
    const roomNumber = document.getElementById('room').value;
    const range = `Room ${roomNumber}!A3:G3`;  // Assuming previous data in row 3

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1f85Uc31TVpkRScRQO5q1-jjFs721bSNeZlbgUMIBajA',
        range: range
    }).then((response) => {
        console.log("Response Data:", response.result.values); //log
        const values = response.result.values;
        if (values && values.length > 0) {
            document.getElementById('balance').value = values[0][4];  // previous balance in 5th column
            document.getElementById('meterPrev').value = values[0][5];    // previous meter reading in 6th column
        } else {
            alert("No data found for selected room.");
        }
    }, (error) => {
        console.error('Error fetching data', error);
    });
}

function calculateTotalUnits() {
    const prevMeter = parseFloat(document.getElementById('meterPrev').value) || 0;
    const currentMeter = parseFloat(document.getElementById('meterCurrent').value) || 0;

    const totalUnits = currentMeter - prevMeter;
    document.getElementById('totalUnit').value = totalUnits;

    const amountPerUnit = 5;  // Example: 5 currency units per meter unit
    document.getElementById('amount').value = totalUnits * amountPerUnit;
}

document.getElementById('rentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const roomNumber = document.getElementById('room').value;
    const month = document.getElementById('month').value;
    const rentPaid = document.getElementById('rentPaid').value;
    const rentDate = document.getElementById('rentDate').value;
    const rentStatus = document.getElementById('rentStatus').value;
    const balance = document.getElementById('balance').value;
    const meterPrev = document.getElementById('meterPrev').value;
    const meterCurrent = document.getElementById('meterCurrent').value;
    const readingDate = document.getElementById('readingDate').value;
    const totalUnit = document.getElementById('totalUnit').value;
    const amount = document.getElementById('amount').value;
    const paidDate = document.getElementById('paidDate').value;
    const paidStatus = document.getElementById('paidStatus').value;
    const balanceStatus = document.getElementById('balanceStatus').value;
    const totalBalance = document.getElementById('totalBalance').value;

    const data = {
        month: month,
        rentPaid: rentPaid,
        rentDate: rentDate,
        rentStatus: rentStatus,
        balance: balance,
        meterPrev: meterPrev,
        meterCurrent: meterCurrent,
        readingDate: readingDate,
        totalUnit: totalUnit,
        amount: amount,
        paidDate: paidDate,
        paidStatus: paidStatus,
        balanceStatus: balanceStatus,
        totalBalance: totalBalance
    };

    submitData(roomNumber, data);
});

function submitData(roomNumber, data) {
    const sheetName = `Room ${roomNumber}`;
    const params = {
        spreadsheetId: '1f85Uc31TVpkRScRQO5q1-jjFs721bSNeZlbgUMIBajA',
        range: `${sheetName}!A1`,  // Adjust range as needed
        valueInputOption: 'RAW',
    };

    const valueRangeBody = {
        "majorDimension": "ROWS",
        "values": [Object.values(data)]
    };

    return gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody)
        .then((response) => {
            console.log(response);
            alert(`Data submitted successfully to ${sheetName}`);
        }, (err) => {
            console.error('Execute error', err);
        });
}
