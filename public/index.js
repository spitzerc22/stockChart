const { GME, MSFT, DIS, BNTX } = mockData;

const stocks = [GME, MSFT, DIS, BNTX];

console.log(stocks)


async function renderCharts(chart) {
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
}
    

async function main() {

    const response = await fetch ("https://api.twelvedata.com/api_usage?apikey=97676cb08d4741809abcb0c86f2095d0");
        const charts = await response.json();
       return charts;
 
}




main()