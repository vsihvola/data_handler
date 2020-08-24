const Faceit = require("faceit-js");
const api = new Faceit(`cb0281a0-8c84-4d16-9018-e305ac8986a2`);

//const steamSite = "https://steamcommunity.com/profiles/";


async function getPlayers() {

    /*
    Palauttaa top100 
    player_id: '9f8d35f7-8773-442c-b68f-41c31e318ddc',
    nickname: 'Syn-G-',
    country: 'fi',
    position: 99,
    faceit_elo: 3156,
    game_skill_level: 10
    */
    const players = await getTopPlayers(100)


    /*
    Palauttaa datan profiilista
    friends_ids: [..]
    bans: [],
    new_steam_id: '[U:1:26565773]',
    steam_id_64: '76561197986831501',
    steam_nickname: 'xartE',
    membership_type: 'premium',
    memberships: [ 'premium' ],
    faceit_url: 'https://www.faceit.com/{lang}/players/xartE'
    */

    const theProfile = await getProfileData(players.items[1]);


    console.log(theProfile);

}

async function getTopPlayers(limit) {
    return await api
        .rankings("csgo", "EU", "fi", limit)
        .catch(err =>
            console.log(err))
}

async function getProfileData(player) {
    return await api
        .players(player.player_id)
        .catch(err =>
            console.log(err))
}

getPlayers();
