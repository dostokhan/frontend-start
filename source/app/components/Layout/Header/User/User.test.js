import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect'; // You can use any testing library

import Link from 'next/link';
import { StyledLink } from '@Styled/StyledLink';

import User from './User';

configure({ adapter: new Adapter() });
describe('User component', () => {
  // beforeEach(() => {
  // });


  it('should show Login link for unauthorized user', () => {
    const wrapper = shallow(<User />);
    // expect(wrapper.equals(<div>Login</div>)).to.equal(true);
    expect(wrapper.contains(
      <Link
        href="/login"
        passHref
      >
        <StyledLink>Login</StyledLink>
      </Link>)).toBe(true);
    // expect(wrapper.find('.dog-placeholder').exists()).toBe(true);
    // expect(wrapper.find('.dog-image').exists()).toBe(false);
  });
});
