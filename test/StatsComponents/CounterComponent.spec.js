import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import CounterComponent from '../../app/js/StatsComponents/CounterComponent';

describe("CounterComponent", () => {
  // Use the method 'mount' to perform a full render
  const testName = "Character";
  const testNumberValue = 5;
  const CounterComponentMounted = mount(<CounterComponent 
    name={testName} numberValue={testNumberValue} />);

  it("Contains classes", () => {
    expect(CounterComponentMounted.find('.counter').length).to.equal(1);
    expect(CounterComponentMounted.find('.col-1-5').length).to.equal(1);
    expect(CounterComponentMounted.find('.label').length).to.equal(1);
  });

  it('Should have name and a numberValue props', () => {
    expect(CounterComponentMounted.prop('name')).to.equal(testName);
    expect(CounterComponentMounted.prop('numberValue')).to.equal(testNumberValue);
  });
});
