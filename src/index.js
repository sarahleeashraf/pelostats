import Papa from 'papaparse';
import d3 from 'd3';

console.log("Hello world");

var button = document.querySelector('.js-upload-data');
var fileInput = document.querySelector('.js-csv-input');


button.addEventListener("click", function() {
    console.log('clickity');

    console.log(fileInput);
    console.log(fileInput.files);

    if (fileInput.files.length) {
        var file = fileInput.files[0];

        Papa.parse(file, {
            complete: function(results, file) {
                console.log(results.data);
                console.log(file);
            },
            header: true
        })



    }
});
