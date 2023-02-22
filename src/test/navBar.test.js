import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/navBar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
