/**
items by level 
9 11 13 15 17 18 
template from https://lolmath.net/itemop.html
*/

let enemy_adc_lvl_9;
let enemy_adc_lvl_11;
let enemy_adc_lvl_13;
let enemy_adc_lvl_15;
let enemy_adc_lvl_17;

let specific_champ_lvl_9;
let specific_champ_lvl_11;
let specific_champ_lvl_13;
let specific_champ_lvl_15;
let specific_champ_lvl_17;

//no magic resist values in JSON so values have been looked up and placed here
const enemy_adc_magic_resist = 30;
const enemy_adc_magic_resist_per_lvl = 0.5;

//array containing the following: (armor, magic resist)
function enemy_stat_per_level(champ_data, level){
	return[
		champ_data.armor + (champ_data.armorperlevel*level),
		enemy_adc_magic_resist + (enemy_adc_magic_resist_per_lvl*level) 
        ];
}

//array containing the following: (attack damage, health)
function user_stat_per_level(champ_data, level){
	return[
		champ_data.attackdamage + (champ_data.attackdamageperlevel*level),
		champ_data.hp + (champ_data.hpperlevel*level) 
        ];
}

function populate_variables_by_level(){
	enemy_adc_lvl_9 = enemy_stat_per_level(enemy_adc_data, 9);
	enemy_adc_lvl_11 = enemy_stat_per_level(enemy_adc_data, 11);
	enemy_adc_lvl_13 = enemy_stat_per_level(enemy_adc_data, 13);
	enemy_adc_lvl_15 = enemy_stat_per_level(enemy_adc_data, 15);
	enemy_adc_lvl_17 = enemy_stat_per_level(enemy_adc_data, 17);

	specific_champ_lvl_9 = user_stat_per_level(specific_champ_data, 9);
	specific_champ_lvl_11 = user_stat_per_level(specific_champ_data, 11);
	specific_champ_lvl_13 = user_stat_per_level(specific_champ_data, 13);
	specific_champ_lvl_15 = user_stat_per_level(specific_champ_data, 15);
	specific_champ_lvl_17 = user_stat_per_level(specific_champ_data, 17);

	console.log(enemy_adc_lvl_9);
	console.log(specific_champ_lvl_9);
}