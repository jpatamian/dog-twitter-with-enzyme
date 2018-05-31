import TwitterFeed from '../../src/containers/TwitterFeed';
import Tweet from '../../src/components/Tweet';

describe('TwitterFeed', () => {
  let wrapper;
  let data = [{
    id: 1,
    text: "This doesn't look like Kansas",
    user: {
       name: 'Todo',
       profile_image_url: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    }
  }]
// virtually connect to component - render HTML for phantomJS and return DOM tree
// before every test

  beforeEach(() => {
    wrapper = mount(
      <TwitterFeed
        data={data}
      />
    )
  });

  it('should return true', () => {
    expect(true).toEqual(true);
  })

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ selectedTweetId: null });
  })

  it('should render a Tweet Component', () => {
   expect(wrapper.find(Tweet)).toBePresent();
  });

  it('should Pass down different props to the Tweet component if we setState to a different tweet id.', () => {
    wrapper.find(Tweet).simulate('click')
    expect(wrapper.find(Tweet).props().className).toEqual(
      'selected'
    );
  });

})
