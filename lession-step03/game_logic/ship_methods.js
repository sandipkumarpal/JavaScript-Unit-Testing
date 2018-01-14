function checkForShip(player, coordinates) {
    let shipPresent, ship;
    for (let index = 0; index < player.ships.length; index++) {
        let ship = player.ships[index];
        
        let shipPresent = ship.locations.filter(function(actualCoord){
            return (actualCoord[0] === coordinates[0]) && (actualCoord[1] === coordinates[1])
        })[0];

        if (shipPresent) {
            return true;
        }
    }

    return false;
}

function damageShip(ship, coordinates) {
    ship.damage.push(coordinates);
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
