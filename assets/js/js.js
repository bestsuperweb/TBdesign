$(document).ready(function(){
    
    new WOW().init();

    smoothScroll.init();

    $('.flexslider1').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });

	$('.flexslider1 .flex-control-nav li').each(function(index, element){
		setTimeout( function(){
				    $(element).addClass('animated slideOutDown');
				  }, (100 * index));
	});

	$(window).scroll(function(){
		if($('#testimonial').length){
			var top = $('#testimonial').offset().top - 600;
		    if($(this).scrollTop() >= top){	        
				$('.flexslider1 .flex-control-nav li').each(function(index, element){
					setTimeout( function(){
							    $(element).removeClass('slideOutDown').addClass('animated bounceInUp');
							  }, (100 * index));
				});
		    }
		}	    
	});

	$('.buyer-dashboard .panel .panel-heading .pull-right a[data-toggle="collapse"]').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		if( $(this).children('.glyphicon').hasClass('glyphicon-minus') ){
			$(this).children('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
		}else{
			$(this).children('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
		}
	});

	if ($('.input-date')) {
		$('.input-date').datepicker({ });
	}

	// charts

	if ($('#eventOverviewChart').length) {
		
	    var randomScalingFactor = function() {
	        return Math.round(Math.random() * 100);
	    };

	    var config = {
	        type: 'pie',
	        data: {
	            datasets: [{
	                data: [
	                    randomScalingFactor(),
	                    randomScalingFactor(),
	                    randomScalingFactor(),
	                    randomScalingFactor(),
	                    randomScalingFactor(),
	                ],
	                backgroundColor: [
	                    window.chartColors.red,
	                    window.chartColors.orange,
	                    window.chartColors.yellow,
	                    window.chartColors.green,
	                    window.chartColors.blue,
	                ],
	                label: 'Dataset 1'
	            }],
	            labels: [
	                "Sandpit",
	                "Draft",
	                "Closed",
	                "Current",
	                "Message"
	            ]
	        },
	        options: {
	            responsive: true
	        }
	    };

	    var ctx = document.getElementById("eventOverviewChart").getContext("2d");
	    window.myPie = new Chart(ctx, config);

	    document.getElementById('randomizeData').addEventListener('click', function() {
	        config.data.datasets.forEach(function(dataset) {
	            dataset.data = dataset.data.map(function() {
	                return randomScalingFactor();
	            });
	        });

	        window.myPie.update();
	    });

	    var colorNames = Object.keys(window.chartColors);
	    document.getElementById('addDataset').addEventListener('click', function() {
	        var newDataset = {
	            backgroundColor: [],
	            data: [],
	            label: 'New dataset ' + config.data.datasets.length,
	        };

	        for (var index = 0; index < config.data.labels.length; ++index) {
	            newDataset.data.push(randomScalingFactor());

	            var colorName = colorNames[index % colorNames.length];;
	            var newColor = window.chartColors[colorName];
	            newDataset.backgroundColor.push(newColor);
	        }

	        config.data.datasets.push(newDataset);
	        window.myPie.update();
	    });

	    document.getElementById('removeDataset').addEventListener('click', function() {
	        config.data.datasets.splice(0, 1);
	        window.myPie.update();
	    });
    
	}

	if ($('#eventStatChart').length) {
		var ctx = document.getElementById("eventStatChart");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Current", "Closed", "Draft", "Message", "Sandpit", "I-Portal"],
		        datasets: [{
		            label: '# of events by stat',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	}

	if ($('#eventLineChart').length) {
		var ctx = document.getElementById("eventLineChart");
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		        datasets: [{
		            label: '# of events by month',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(54, 162, 235, 0.2)'
		            ],
		            borderColor: [
		                'rgba(54, 162, 235, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

	}


});