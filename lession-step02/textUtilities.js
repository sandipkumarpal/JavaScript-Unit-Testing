const expect = require('chai').expect;

expect(true).to.be.true;
function titleCase(title) {
    const word = title.split(' ');
    const titleCaseWord = word.map(function(word) {
        return word[0].toUpperCase() + word.substring(1);
    });
    return titleCaseWord.join(' ');

    // return title[0].toUpperCase() + title.substring(1);
}

expect(titleCase('The greate mugicien Show')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('The greate mugicien Show')).to.equal('The Greate Mugicien Show');