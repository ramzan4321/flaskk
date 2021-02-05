let standard_select = document.getElementById('standard')
	let roll_select = document.getElementById('roll')
	let feedet_select = document.getElementById('feedet')
	standard_select.onchange = function(){
		standard = standard_select.value;
		fetch('/roll/'+ standard).then(function(response){
			response.json().then(function(data){
				let optionHTML='';

				for (let roll of data.rollno) {
					optionHTML +='<option value="'+roll.roll_num+'">'+ roll.roll_num + "["+roll.name+"]"+'</option>';			}
				roll_select.innerHTML = optionHTML;
			});
		});
};
