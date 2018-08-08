var $ = window

function handleFileSelect(e) {
	var file = e.target.files[0]
	var reader = new FileReader();
	reader.onload = function() {
		var data = reader.result;
		data = data.replace(/^data:application\/json;base64,/, "")
		data = JSON.parse(atob(data))
		$.ajax({
			url: '/task/api/upload',
			method: 'POST',
			body: {data: data},
			success: function(data) {
				location.href = '/viz/map'
			}
		})
	}
	reader.readAsDataURL( file );
}

if(document.getElementById('jsonFile')) {
	document.getElementById('jsonFile').addEventListener('change', handleFileSelect, false);
}