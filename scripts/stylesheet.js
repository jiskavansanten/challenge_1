   var ctx = document.getElementById('myChart').getContext('2d');
		        var chart = new Chart(ctx, {
		            // The type of chart we want to create
		            type: 'doughnut',
		            data: {
		                labels: [
		                    '',
		                    '',
		                    ''
		                ],
		                Color: [
		                    '0000FF'
		                ],
		                datasets: [{
		                    //deze waarden zijn de stukjes van donut
		                    data: [40, 50, 50],
		                    //deze waarden kan je aanpassen voor kleur
		                    backgroundColor: ['red', 'orange', 'green']
		                }],

		                // Configuration options go here

		            },
		            options: {
		                rotation: 1 * Math.PI,
		                circumference: 1 * Math.PI
		            }
		        });