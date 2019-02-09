import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from '../App';
import Filter from '../components/Filter';
import RecordTable from '../components/RecordTable';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('BirthdayRecords <App/>', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('check default/initial state of the application', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(RecordTable).text()).toEqual('NameDate of BirthAlexander Alfred02/09/1891Cecilia Olsson09/16/1992Deborah T. Decker10/31/1999Janice Shroyer12/01/1982Jimmy Shergil12/12/2001Peter Parker01/16/1992Ralph White11/30/2011Veronica Mize11/29/2011');
  });

  it('check filter by age', () => {
    const wrapper = mount(<App />);
    wrapper.find(Filter).instance().onChange('age');
    expect(wrapper.find(RecordTable).text()).toEqual('NameDate of BirthAlexander Alfred02/09/1891Janice Shroyer12/01/1982Peter Parker01/16/1992Cecilia Olsson09/16/1992Deborah T. Decker10/31/1999Jimmy Shergil12/12/2001Veronica Mize11/29/2011Ralph White11/30/2011');
  });

  it('check filter by age and then filter by name', () => {
  	const wrapper = mount(<App />);
    wrapper.find(Filter).instance().onChange('age');
    expect(wrapper.find(RecordTable).text()).toEqual('NameDate of BirthAlexander Alfred02/09/1891Janice Shroyer12/01/1982Peter Parker01/16/1992Cecilia Olsson09/16/1992Deborah T. Decker10/31/1999Jimmy Shergil12/12/2001Veronica Mize11/29/2011Ralph White11/30/2011');
  	wrapper.find(Filter).instance().onChange('name');
  	expect(wrapper.find(RecordTable).text()).toEqual('NameDate of BirthAlexander Alfred02/09/1891Cecilia Olsson09/16/1992Deborah T. Decker10/31/1999Janice Shroyer12/01/1982Jimmy Shergil12/12/2001Peter Parker01/16/1992Ralph White11/30/2011Veronica Mize11/29/2011');
  });

  it('check number of rows rendered', () => {
	const wrapper = mount(<App />);
	let el = wrapper.find('tr');
	expect(el.length).toEqual(9);
  });
});
