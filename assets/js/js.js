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

	$('.market-dashboard .panel .panel-heading .pull-right a[data-toggle="collapse"]').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		if( $(this).children('.glyphicon').hasClass('glyphicon-minus') ){
			$(this).children('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
		}else{
			$(this).children('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
		}
	});

	if ($('.input-date').length) {
		$('.input-date').datepicker({ });
	}

	if ($('[data-toggle="tooltip"]').length) {
		$('[data-toggle="tooltip"]').tooltip();	
	}
	
	if ($('.multi-select').length) {
		$('.multi-select').multiselect();
	}

	$('.sidebar-toggle').on('click', function () {
         $('#sidebar').toggleClass('active');
     });

	// charts

	if ($('#report-chart').length) {
		$('#report-chart').highcharts({
			title: {
		        text: '<b>Report Chart</b>'
		    },
	        chart: {
	            type: 'column',
	            margin: 75,
	            options3d: {
					enabled: true,
	                alpha: 10,
	                beta: 15,
	                depth: 50
	            }
	        },
	        plotOptions: {
	            column: {
	                depth: 25
	            }
	        },
	        yAxis: [{ 
			    title: {
			        text: '...'
			    }
			}],
	        series: [{
	        	name: 'Requests',
	            data: [30, 72, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
	        }]
	    });
	}

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

	if ($('#invitation-chart').length) {
		Highcharts.chart('invitation-chart', {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    title: {
		        text: 'Accepted<br>Invite',
		        align: 'center',
		        verticalAlign: 'middle',
		        y: 40
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                distance: -50,
		                style: {
		                    fontWeight: 'bold',
		                    color: 'white'
		                }
		            },
		            startAngle: -90,
		            endAngle: 90,
		            center: ['50%', '75%']
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: 'Invite',
		        innerSize: '50%',
		        data: [
		            ['Accepted',   5],
		            ['Not accepted',     5]
		        ]
		    }]
		});

		$('#invitation-chart1').highcharts({
	        chart: {
	            type: 'pie',
	            options3d: {
					enabled: true,
	                alpha: 60,
	                beta: 0,
	            }
	        },
	        title: {
		        text: '...'
		    },
	        plotOptions: {
	            pie: {
	                depth: 45
	            }
	        },
	        series: [{
	        	name: 'Invite',
	            data: [
	            	['Accepted',   1],
		            ['Not accepted',     2]
	            ]
	        }]
	    });
	}

	if ($('#submission-chart').length) {
		Highcharts.chart('submission-chart', {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    title: {
		        text: 'Complete<br>Submissions',
		        align: 'center',
		        verticalAlign: 'middle',
		        y: 40
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                distance: -50,
		                style: {
		                    fontWeight: 'bold',
		                    color: 'white'
		                }
		            },
		            startAngle: -90,
		            endAngle: 90,
		            center: ['50%', '75%']
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: 'Submissions',
		        innerSize: '50%',
		        data: [
		            ['Complete',   7],
		            ['Incomplete',  3]
		        ]
		    }]
		});

		$('#submission-chart1').highcharts({
	        chart: {
	            type: 'pie',
	            options3d: {
					enabled: true,
	                alpha: 60,
	                beta: 0,
	            }
	        },
	        title: {
		        text: '...'
		    },
	        plotOptions: {
	            pie: {
	                depth: 45
	            }
	        },
	        series: [{
	        	name: 'Submissin',
	            data: [
	            	['Not submitted anything',   1],
		            ['Submission in progress',     2]
	            ]
	        }]
	    });
	}

	if ($('#scoring-chart').length) {
		Highcharts.chart('scoring-chart', {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    title: {
		        text: 'Submissin<br>Scored',
		        align: 'center',
		        verticalAlign: 'middle',
		        y: 40
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                distance: -50,
		                style: {
		                    fontWeight: 'bold',
		                    color: 'white'
		                }
		            },
		            startAngle: -90,
		            endAngle: 90,
		            center: ['50%', '75%']
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: 'Submissin',
		        innerSize: '50%',
		        data: [
		            ['Scored',   4],
		            ['Not scored',  6]
		        ]
		    }]
		});

		$('#scoring-chart1').highcharts({
	        chart: {
	            type: 'pie',
	            options3d: {
					enabled: true,
	                alpha: 60,
	                beta: 0,
	            }
	        },
	        title: {
		        text: '...'
		    },
	        plotOptions: {
	            pie: {
	                depth: 45
	            }
	        },
	        series: [{
	        	name: 'Submissin',
	            data: [
	            	['Submission not scored',   1],
		            ['Scoring in progress',     2]
	            ]
	        }]
	    });
	}

	if ($('#sim-chart').length) {
		Highcharts.chart('sim-chart', {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    title: {
		        text: 'Sim<br>Approved',
		        align: 'center',
		        verticalAlign: 'middle',
		        y: 40
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                distance: -50,
		                style: {
		                    fontWeight: 'bold',
		                    color: 'white'
		                }
		            },
		            startAngle: -90,
		            endAngle: 90,
		            center: ['50%', '75%']
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: 'Sim',
		        innerSize: '50%',
		        data: [
		            ['Approved',   8],
		            ['Not Approved',    2]
		        ]
		    }]
		});

		$('#sim-chart1').highcharts({
	        chart: {
	            type: 'pie',
	            options3d: {
					enabled: true,
	                alpha: 60,
	                beta: 0,
	            }
	        },
	        title: {
		        text: '...'
		    },
	        plotOptions: {
	            pie: {
	                depth: 45
	            }
	        },
	        series: [{
	        	name: 'Sim',
	            data: [
	            	['Pending approvals',   1],
		            ['Decision required',     2]
	            ]
	        }]
	    });
	}

	if ($('#decision-chart').length) {
		Highcharts.chart('decision-chart', {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    title: {
		        text: 'Decision<br>Made',
		        align: 'center',
		        verticalAlign: 'middle',
		        y: 40
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                distance: -50,
		                style: {
		                    fontWeight: 'bold',
		                    color: 'white'
		                }
		            },
		            startAngle: -90,
		            endAngle: 90,
		            center: ['50%', '75%']
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: 'Decision',
		        innerSize: '50%',
		        data: [
		            ['Made',   5],
		            ['Not made',     5]
		        ]
		    }]
		});

		$('#decision-chart1').highcharts({
	        chart: {
	            type: 'pie',
	            options3d: {
					enabled: true,
	                alpha: 60,
	                beta: 0,
	            }
	        },
	        title: {
		        text: '...'
		    },
	        plotOptions: {
	            pie: {
	                depth: 45
	            }
	        },
	        series: [{
	        	name: 'Decision',
	            data: [
	            	['Decision reqruied',   1],
		            ['Approved',     2],
		            ['Rejected',     3]
	            ]
	        }]
	    });
	}

});