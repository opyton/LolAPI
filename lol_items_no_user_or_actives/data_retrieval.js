/* global fetch */

const current_patch_champs = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json';
const current_patch_items = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/item.json';
const enemy_adc_name = 'Ashe';

let all_champ_data, all_item_data, enemy_adc_data;
function user_input_formatting(string){return string.charAt(0).toUpperCase() + string.slice(1);}

function get_champion_data(){

  fetch(current_patch_champs)
  .then(response => {
    return response.json();
  })
  .then(data => {
    all_champ_data=data.data;
    enemy_adc_data=all_champ_data[enemy_adc_name].stats;
    console.log(all_champ_data);
    console.log(enemy_adc_data);
  })
  .catch(err => {
    console.log("get champ data error");
  });
}

function get_item_data(){

  fetch(current_patch_items)
  .then(response => {
    return response.json();
  })
  .then(data => {
    all_item_data=data.data;
    console.log(all_item_data);
  })
  .catch(err => {
    console.log("get item data error");
  });
}

