 

(function() {
	var ctx = $("#myChart1").get(0).getContext("2d");
	var myDonatChart = new Chart(ctx);


	var data = [
		    {
		        value: 250,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Red"
		    },
		    {
		        value: 100,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Green"
		    },
		    {
		        value: 100,
		        color: "#FDB45C",
		        highlight: "#FFC870",
		        label: "Yellow"
		    }
	];
    		
    
	var options = {

	};
	myDonatChart.Doughnut(data,options);
})();



(function() {
	var ctx2 = $("#myChart2").get(0).getContext("2d");
	var myDonatChart2 = new Chart(ctx2);


	var data = [
		    {
		        value: 250,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Red"
		    },
		    {
		        value: 50,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Green"
		    },
		    {
		        value: 100,
		        color: "#FDB45C",
		        highlight: "#FFC870",
		        label: "Yellow"
		    }
	];
    		
    
	var options = {

	};
	myDonatChart2.Doughnut(data,options);
})();

(function() {
	var ctx3 = $("#myChart3").get(0).getContext("2d");
	var myDonatChart3 = new Chart(ctx3);


	var data = [
		    {
		        value: 250,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Red"
		    },
		    {
		        value: 50,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Green"
		    }
	];
    		
    
	var options = {

	};
	myDonatChart3.Doughnut(data,options);
})();

