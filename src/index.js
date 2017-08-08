import Papa from 'papaparse';
import * as D3 from 'd3';

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

                mostFrequentCoach(results.data)
            },
            header: true
        })



    }
});

function mostFrequentCoach(data) {


    console.log(data);

    var histBuckets = {};

    data.forEach(workout => {
        if (workout["Instructor Name"] === undefined) {
            return
        }

        if (histBuckets[workout["Instructor Name"]] === undefined) {
            histBuckets[workout["Instructor Name"]] = 1
        } else {
            histBuckets[workout["Instructor Name"]]++;
        }
    })

    console.log(histBuckets);
};
