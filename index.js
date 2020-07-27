var pdfFillForm = require('pdf-fill-form');
var fs = require('fs');

const data =  {
    "ServiceLocation": "ADDRESS",
    "ApplicationDate": "July 23, 2020", 
    "Applicant1FirstName": "Erika",
    "Applicant1LastName": "Miguel",
    "Applicant1MI": "V",
    "Applicant1PhotoIDType": "Driver's License",
    "Applicant1ID#": "1234567",
    "Applicant1Phone": "123-456-7890",
    "Applicant1Cell/Email": "my@email.com"
}

pdfFillForm.writeBuffer(fs.readFileSync('form.pdf'), data, { "save": "pdf", 'cores': 4, 'scale': 0.2, 'antialias': true } )
.then(function(result) {
    fs.writeFile("test123.pdf", result, function(err) {
        if(err) {
       		return console.log(err);
       	}
       	console.log("The file was saved!");
    }); 
}, function(err) {
  	console.log(err);
});