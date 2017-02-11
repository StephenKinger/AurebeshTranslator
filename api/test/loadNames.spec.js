import {expect}             from 'chai';
import loadNames                  from '../src/loadNames';


describe('loadNames', () => {
  it('Test Name loading', () => {
      let loaded = loadNames.loadNames("human", "male");
      console.log(loaded)
    expect(loaded).to.eql(["tutu", "titi", "tata", "otot", "toto", "oott"]);
  });
});
