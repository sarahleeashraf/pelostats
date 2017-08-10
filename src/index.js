import Papa from 'papaparse';
import * as D3 from 'd3';

console.log("Hello world");

var button = document.querySelector('.js-upload-data');
var fileInput = document.querySelector('.js-csv-input');
var chartTypeSelector = document.querySelector('.js-chart-type');

function showChartTypeSelector() {
    if (window.localStorage.getItem("PeloData")) {
        chartTypeSelector.style.display = "block";
    }
}

showChartTypeSelector()

chartTypeSelector.addEventListener("change", (event) => {
    const selector = event.target;
    const selectedChart = selector.options[selector.selectedIndex].value;
    console.log(selectedChart);

    // TODO replace with pubsub or something better

    mostFrequentCoach()
});


button.addEventListener("click", function() {


    if (fileInput.files.length) {
        var file = fileInput.files[0];

        Papa.parse(file, {
            complete: function(results, file) {
                console.log(results.data);
                console.log(file);

                window.localStorage.setItem("PeloData", JSON.stringify(results.data));

                showChartTypeSelector()

            },
            header: true
        })


    }
});

function mostFrequentCoach() {

    const data = JSON.parse(window.localStorage.getItem("PeloData"));

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
    });

    console.log(histBuckets);

    // todo make chart
};
