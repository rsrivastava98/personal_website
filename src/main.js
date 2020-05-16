
function graph1(d3, margin, graph_1_width, graph_1_height, FOOTBALL_DATA_SET){

    let svg = d3.select("#graph1")
        .append("svg")
        .attr("width", graph_1_width)    
        .attr("height", graph_1_height)     
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    let h = graph_1_height - margin.top - margin.bottom

    let countG = svg.append("g")
    var y_axis_label = svg.append("g")
            .attr("transform", "translate(0," + h + ")")

    let title = svg.append("text").text("Number of Games Played by Year")
            .attr("transform", `translate(${(graph_1_width - margin.left - margin.right) / 2}, ${-25})`)       
            .style("text-anchor", "middle")
            .style("font-size", "14");

    svg.append("text")
            .attr("transform", `translate(${(graph_1_width - margin.left - margin.right) / 2},
                                                ${(graph_1_height - margin.top - margin.bottom) + 40})`)       
            .style("text-anchor", "middle")
            .text("Year").attr("font-size", "14");    
            

    svg.append("text")
            .attr("transform", `translate(-50, ${(graph_1_height - margin.top - margin.bottom) / 2})`)       
            .style("text-anchor", "middle").text("Count").attr("font-size", "14");    

    
    var groups = [2020, 2010, 2000, 1990, 1980, 1970, 1960, 1950, 1940, 1930, 1920, 1910, 1900];
    d3.select("#selectButton")
    .selectAll('year').data(groups)
      .enter()
        .append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; }) 

    d3.select("#selectButton").on("change", function(d) {
        var selectedOption = d3.select(this).property("value")
        filterData(selectedOption)
    })

    function filterData(option){

        let filename = FOOTBALL_DATA_SET;
        d3.csv(filename).then(function(data) {
            
            data = getData(data, function(entry){
                    let dif = option - parseInt(entry.date.slice(0,4))
                    if(dif >= 0 && dif < 10){
                        return true;
                    }
                    return false;
            });
            
            
            data = countGamesInYear(data)
            data = sortData(data, function(a , b){
                return b - a
            });
            

            let y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d[1])])
                .range([graph_1_height - margin.top - margin.bottom, 0]);

            let x = d3.scaleBand()
                .domain(data.map(d => d[0]))
                .range([0, graph_1_width - margin.left - margin.right])
                .padding(0.1);
            
            
            y_axis_label.call(d3.axisBottom(x).tickPadding(5))

            
            // let color = d3.scaleOrdinal()
            //     .range(d3.schemeAccent);

            let bars = svg.selectAll("rect").data(data);

            bars.enter()
                .append("rect")
                .merge(bars).transition()
                .duration(1000)
                .attr("fill", "#59C3C3")    
                .attr("x", function(d) { return x(d[0]); })
                .attr("y", d => y(d[1]))         
                .attr("width", x.bandwidth())
                .attr("height",  function(d) { return graph_1_height - margin.top - margin.bottom- y(d[1]); }); 
            
            let counts = countG.selectAll("text").data(data);

            counts.enter()
                    .append("text")
                    .merge(counts)
                    .transition()
                    .duration(1000)
                    .attr("y", function(d) { return y(d[1]) - 5; })       
                    .attr("x", function(d) { return x(d[0]) + 0.35*x.bandwidth(); })       
                    .style("text-anchor", "start")
                    .text(function(d) {return d[1];})  
                    .attr("font-size", "12");    
        
            
            
            bars.exit().remove();
            counts.exit().remove();


            function getData(data, comparator) {
                return data.filter(comparator);
            }

            function sortData(data, comparator){
                let new_data = Object.keys(data)
                return new_data.sort(comparator).slice(0, 10).map(key => [key, data[key]]);
            }

            function countGamesInYear(data){
                var countData = {}

                for(var i = 0; i < data.length; i++){
                    let year = parseInt(data[i].date.slice(0,4))
                    if(!(year in countData)){
                        countData[year] = 1;
                    }
                    else{
                        countData[year] ++;
                    }

                }

                return countData
            }

        });    
    }

    filterData(2020)
}


function graph3(d3, margin, graph_3_width, graph_3_height, FOOTBALL_DATA_SET, locations_csv){

    var location = {"Asturias": [43.36, -5.95],
                    "Jersey": [49.21, -2.13],
                    "Chameria": [46.46, 5.56],
                    "Menorca": [39.94, 4.11],
                    "Canary Islands": [28.29, -16.62],
                    "Padania": [45.29, 11.16],
                    "Basque Country": [42.96, -2.59],
                    "Brazil": [-23.53, -46.62],
                    "Tahiti": [-17.36, -149.5],
                    "Ivory Coast": [5.34, -4.02],
                    "Iraqi Kurdistan": [30.86, 44.10],
                    "Ynys Môn":[53.267684, -4.371611],
                    "Isle of Man": [54.205801, -4.529593],
                    "Abkhazia": [43.141859, 40.999746],
                    "Guernsey": [49.446756, -2.573537],
                    "Yugoslavia": [44.810045, 20.429455],
                    "Isle of Wight": [50.682774, -1.318987],
                    "Scotland": [57.087281, -2.908522],
                    "China PR": [32.137429, 103.543756],
                    "German DR": [52.555621, 13.382851]
                    }

    let svg = d3.select("#graph3")
        .append("svg")
        .attr("width", graph_3_width)    
        .attr("height", graph_3_height)     
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    var projection = d3.geoMercator()
        .center([0,20])                // GPS of location to zoom on
        .scale(99)                       // This is like the zoom
        .translate([(graph_3_width-margin.left-margin.right)/2, (graph_3_height-margin.top-margin.bottom)/2 ])

    
    var curr_nations = 10;
    var curr_games = 20;

    var groups = [10, 20, 30, 40];
    d3.select("#selectButton2")
    .selectAll('number').data(groups)
      .enter()
        .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

    d3.select("#selectButton2").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        curr_nations = selectedOption;
        // run the updateChart function with this selected option
        changeMap(curr_nations, curr_games)
    })

    var min_games = [20, 40, 60, 80, 100];
    d3.select("#selectButton3")
    .selectAll('number').data(min_games)
      .enter()
        .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

    d3.select("#selectButton3").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        curr_games = selectedOption;
        changeMap(curr_nations, curr_games)
    })

    let filename_2 = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

    d3.json(filename_2).then(function(geoData) {

        svg.append("g")
                    .selectAll("path")
                    .data(geoData.features)
                    .enter()
                    .append("path")
                    .attr("fill", "#b8b8b8")
                    .attr("d", d3.geoPath()
                        .projection(projection)
                    )
                    .style("stroke", "none")
                    .style("opacity", .3)

    });

    let title = svg
    .append("text")
    .attr("text-anchor", "end")
    .style("fill", "black")
    .attr("x", (graph_3_width - margin.left)/2)
    .attr("y", 20)
    .attr("width", 100).style("font-size", 16)
    .style("font-weight", "bold")

    var tooltip = d3.select("#graph3").append("div")	
                    .attr("class", "tooltip")				
                    .style("opacity", 0);
    
    function changeMap(number, threshold){

    

        let filename_1 = FOOTBALL_DATA_SET;
        let locations_file = locations_csv;
        d3.csv(filename_1).then(function(data) {
            
                d3.csv(locations_file).then(function(locations) {

                    data = findWinPercentage(data, threshold);
                    data = data.sort(function(a, b){
                        return b[1] - a[1]
                    }).slice(0, number);

                    var locs = {}

                    for(var i = 0; i < locations.length; i++){
                        let entry = locations[i];
                        locs[entry.Country] = [entry.Latitude, entry.Longitude];
                    }
                    
                    let keys = Object.keys(location);
                    for(var i = 0; i < keys.length; i++){
                        if(!(keys[i] in locs)){
                            locs[keys[i]] = location[keys[i]];
                        }
                    
                    }

                    for(var i = 0; i < data.length; i++){
                        if(!(data[i][0] in locs)){
                            console.log(data[i], locs[data[i][0]])
                        }
                    }

                    // let color = d3.scaleOrdinal()
                    // .range(d3.quantize(d3.interpolateHcl("#4062BB", "#81c2c3"), places.length));

                    var value = d3.extent(data, d=> d[1])
                    var size = d3.scaleSqrt()
                    .domain(value)  
                    .range([1, 30]) 

                    let circles = svg
                    .selectAll("circle").data(data)

                    
                    circles.enter()
                    .append("circle")
                    .merge(circles)
                    .style("fill", "4062BB").on("mouseover", function(d) {		
                        tooltip.transition()		
                            .duration(100)		
                            .style("opacity", 0.9);	
                        	
                        tooltip.html("<b>"+d[0]+ "</b>" + "<br/>"  + "<b>Wins</b>: " + (d[1]*100).toFixed(2) + "%")	
                            .style("left", (d3.event.pageX - graph_3_width) + "px")		
                            .style("top", (d3.event.pageY-250) + "px");	
                        })					
                    .on("mouseout", function(d) {		
                        tooltip.transition()		
                            .duration(500)		
                            .style("opacity", 0);
                    })	
                    .transition()
                    .duration(1000)
                    .attr("cx", function(d){ return projection([locs[d[0]][1], locs[d[0]][0]])[0] })
                    .attr("cy", function(d){ return projection([locs[d[0]][1], locs[d[0]][0]])[1] })
                    .attr("r", function(d){ return size(+d[1]) })
                    .attr("fill-opacity", .5);
                    // .style("stroke", "black")
                    // .style("stroke-width", "1px")
                    
                    title.html(`Top ${number} Winners`)
                    
                    circles.exit().remove()
                });
            
        });

        function findWinPercentage(data, threshold){
            var wins = {}
            var games = {}
            var win_pct = []

            for(var i = 0; i < data.length; i++){
                let home_team = data[i].home_team;
                let away_team = data[i].away_team;
                let score_dif = parseInt(data[i].home_score) - parseInt(data[i].away_score);
                let winner = score_dif > 0 ? home_team : away_team;

                
                if(!(winner in wins)){
                    wins[winner] = 1;
                }
                else{
                    wins[winner] ++;
                }
                

                if(!(home_team in games)){
                    games[home_team] = 1;
                }
                else{
                    games[home_team] ++;
                }

                if(!(away_team in games)){
                    games[away_team] = 1;
                }
                else{
                    games[away_team] ++;
                }
            }
            let keys = Object.keys(games)
            for(var i = 0; i < keys.length; i++){
                if(keys[i] in wins && games[keys[i]] > threshold){
                    win_pct.push([keys[i], (wins[keys[i]]/games[keys[i]])])
                }
                else{
                    win_pct.push([keys[i], 0.0])
                }

            }

            return win_pct
        }
    }

    changeMap(10, 20);


}

function graph2(d3, margin, graph_2_width, graph_2_height, FOOTBALL_DATA_SET){

    let svg = d3.select("#graph2")
        .append("svg")
        .attr("width", graph_2_width)    
        .attr("height", graph_2_height)     
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    var tooltip = d3.select("#graph2").append("div")	
        .attr("class", "tooltip-2")				
        .style("opacity", 0);

    d3.csv(FOOTBALL_DATA_SET).then(function(data) {


        data = data.filter(function(entry){
            let year = parseInt(entry.date.slice(0, 4))
            return (entry.tournament == 'FIFA World Cup') && (year == 2018 || year == 2014)
        });

        var winData = findWinPercentage(data)
        var goals = findGoals(data)
    
        for(var i = 0; i <winData.length; i++){

            winData[i].push(goals[winData[i][0]])
        }

        svg.append("text").text("Win % vs Goals Scored by Teams for FIFA World Cups 2014 and 2018")
            .attr("transform", `translate(${(graph_2_width - margin.left - margin.right) / 2}, ${-5})`)       
            .style("text-anchor", "middle")
            .style("font-size", "14");

        svg.append("text")
            .attr("transform", `translate(${(graph_2_width - margin.left - margin.right) / 2},
                                                ${(graph_2_height - margin.top - margin.bottom) + 40})`)       
            .style("text-anchor", "middle")
            .text("Goals").attr("font-size", "14");    
            

        svg.append("text")
            .attr("transform", `translate(-50, ${(graph_2_height - margin.top - margin.bottom) / 2})`)       
            .style("text-anchor", "middle").text("Win %").attr("font-size", "14");    

        let y = d3.scaleLinear()
            .domain([0, d3.max(winData, d => d[1])])
            .range([graph_2_height - margin.top - margin.bottom, 0]);

        let x = d3.scaleLinear()
        .domain([0, d3.max(winData, d => d[2])])
        .range([0, graph_2_width - margin.left - margin.right]);
        
        let h = graph_2_height - margin.top - margin.bottom
        svg.append("g")
        .attr("transform", "translate(0," + h + ")")
        .call(d3.axisBottom(x));

        svg.append("g")
        .call(d3.axisLeft(y));

        svg.append('g')
        .selectAll("dot")
        .data(winData)
        .enter()
        .append("circle")
        .style("fill", "#F45B69")
        .on("mouseover", function(d) {		
            tooltip.transition()		
                .duration(100)		
                .style("opacity", 0.9);	
                
            tooltip.html("<b>"+d[0]+ "</b>" + "<br/>"  + "<b>Wins</b>: " + d[1].toFixed(2) + "%" + "<br/>"  + "<b>Goals Scored</b>: " + d[2])	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 250) + "px");	
            })					
        .on("mouseout", function(d) {		
            tooltip.transition()		
                .duration(500)		
                .style("opacity", 0);
        })	
        .transition()
        .duration(1000)
        .attr("cx", function (d) { return x(d[2]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 5)
        


    });
        

    function findWinPercentage(data){
            var wins = {}
            var games = {}
            var win_pct = []

            for(var i = 0; i < data.length; i++){
                let home_team = data[i].home_team;
                let away_team = data[i].away_team;
                let score_dif = parseInt(data[i].home_score) - parseInt(data[i].away_score);
                let winner = score_dif > 0 ? home_team : away_team;

                
                if(!(winner in wins)){
                    wins[winner] = 1;
                }
                else{
                    wins[winner] ++;
                }
                

                if(!(home_team in games)){
                    games[home_team] = 1;
                }
                else{
                    games[home_team] ++;
                }

                if(!(away_team in games)){
                    games[away_team] = 1;
                }
                else{
                    games[away_team] ++;
                }
            }
            let keys = Object.keys(games)
            for(var i = 0; i < keys.length; i++){
                if(keys[i] in wins){
                    win_pct.push([keys[i], ((wins[keys[i]]/games[keys[i]])*100)])
                }
                else{
                    win_pct.push([keys[i], 0.0])
                }

            }

            return win_pct
    }

    function findGoals(data){

            var goals = {}
            for(var i = 0; i < data.length; i++){
                let home_team = data[i].home_team;
                let away_team = data[i].away_team;
                let home_score = parseInt(data[i].home_score);
                let away_score = parseInt(data[i].away_score);

                if(!(home_team in goals)){
                    goals[home_team] = home_score;
                }
                else{
                    goals[home_team] = goals[home_team] + home_score;
                }

                if(!(away_team in goals)){
                    goals[away_team] = away_score;
                }
                else{
                    goals[away_team] = goals[away_team] + away_score;
                }
        
            }
            return goals
    }
}

export default function main(d3, football, locations){

    // Add your JavaScript code here
const MAX_WIDTH = Math.max(1080, window.innerWidth);
const MAX_HEIGHT = 720;
const margin = {top: 40, right: 100, bottom: 40, left: 100};

// Assumes the same graph width, height dimensions as the example dashboard. Feel free to change these if you'd like
let graph_1_width = (MAX_WIDTH / 2) - 10, graph_1_height = 250;
let graph_2_width = (MAX_WIDTH / 2) - 10, graph_2_height = 275;
let graph_3_width = MAX_WIDTH / 2, graph_3_height = 575;

let FOOTBALL_DATA_SET = football

    graph1(d3, margin, graph_1_width, graph_1_height, FOOTBALL_DATA_SET);
    graph3(d3, margin, graph_3_width, graph_3_height, FOOTBALL_DATA_SET, locations);
    graph2(d3, margin, graph_2_width, graph_2_height, FOOTBALL_DATA_SET);


}


