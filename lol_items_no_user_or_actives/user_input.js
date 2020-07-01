let champ_name, specific_champ_data;

function get_user_specific_champ(){
	try{
		champ_name = document.getElementById("champName").value;
		champ_name = user_input_formatting(champ_name);
		specific_champ_data=all_champ_data[champ_name].stats;
		console.log(specific_champ_data);
	}catch(err){console.log("User input error");}
	
}