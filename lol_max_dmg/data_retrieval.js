/* global fetch */

const current_patch_champs = 'http://ddragon.leagueoflegends.com/cdn/10.10.1/data/en_US/champion.json';
const current_patch_items = 'http://ddragon.leagueoflegends.com/cdn/10.10.1/data/en_US/item.json';
const api_key = 'RGAPI-2d14b9bb-ae39-45ed-9bd4-dfa74fe524ac';
//fuck you CORS
const cors_workaround = 'https://cors-anywhere.herokuapp.com/';

let full_champ_data, full_item_data;
let account_id, champion_key, participant_id, game_stats, champ_name, summoner_id, query_param;
let match_id_array = [];


function user_input_formatting(string){return string.charAt(0).toUpperCase() + string.slice(1);}

function put_matchIds_in_Array(x){match_id_array.push(x.gameId);console.log(match_id_array);}

function get_champion_data(){

  champ_name = document.getElementById("champName").value;
  champ_name = user_input_formatting(champ_name);

  fetch(current_patch_champs)
  .then(response => {
    return response.json();
  })
  .then(data => {
    full_champ_data=data.data[champ_name];
    champion_key = full_champ_data.key;
    console.log(champion_key);
    return full_champ_data;
  })
  .catch(err => {
    console.log("ERROR something went wrong");
  });
}

function get_item_data(){

  fetch(current_patch_items)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    full_item_data=data;
  })
  .catch(err => {
    console.log("ERROR something went wrong");
  });
}

function get_summoner_id(){

  summoner_id = document.getElementById("summonerID").value;
  query_param = cors_workaround + 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summoner_id + '?api_key=' + api_key;
  //console.log(query_param);
  fetch(query_param)
  .then(response => {
    return response.json();
  })
  .then(data => {
    account_id = data.accountId;
  })
  .catch(err => {
    console.log("ERROR something went wrong");
  });
}

function get_matchlist(){
  
  get_summoner_id();
  query_param = cors_workaround + 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + 
    account_id + '?champion='+ champion_key + '&api_key=' + api_key;
  //console.log(query_param);
  fetch(query_param)
  .then(response => {
    return response.json();
  })
  .then(data => {
    game_stats = data;  
    game_stats.matches.forEach(put_matchIds_in_Array); 
  })
  .catch(err => {
    console.log("ERROR something went wrong");
  });
}

