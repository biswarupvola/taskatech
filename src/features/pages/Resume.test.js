import renderer from 'react-test-renderer';
import ResumePage from '../ResumePage';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <ResumePage>Facebook</ResumePage>,
  );
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});