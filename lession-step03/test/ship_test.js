const expect = require('chai').expect;

describe('CheckforShip', function() {
    const checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('Should correctly report on ship at a given players coordinate', function() {
        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        }
        expect (checkForShip(player, [9,9])).to.be.false;
    });

    it('Should correctly report on ship located at the given coordinates', function() {
        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        }
        expect (checkForShip(player, [0,0])).to.be.true;
    });

    it('Should handle ships located at more then one coordinate', function() {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                }
            ]
        }
        expect (checkForShip(player, [0,1])).to.be.true;
        expect (checkForShip(player, [0,0])).to.be.true;
        expect (checkForShip(player, [9,9])).to.be.false;
    });

    it('Should handle checking multiple ships', function() {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        }
        expect (checkForShip(player, [0,1])).to.be.true;
        expect (checkForShip(player, [0,0])).to.be.true;
        expect (checkForShip(player, [1,0])).to.be.true;
        expect (checkForShip(player, [1,1])).to.be.true;
        expect (checkForShip(player, [2,3])).to.be.true;
        expect (checkForShip(player, [9,9])).to.be.false;
    });
});

describe('damageShip', function() {
    const damageShip = require('../game_logic/ship_methods').damageShip;

    it('should resgister damage on a given ship at a given location.', function() {
        const ship = {
            locations: [[0, 0]],
            damage: []
        };
        damageShip(ship, [0, 0]);
        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    })
})