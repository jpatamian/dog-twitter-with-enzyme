import Tweet from '../../src/components/Tweet';

describe('Tweet', () => {
  let wrapper;
  let data = {
    id: 1,
    text: "This doesn't look like Kansas",
    user: {
       name: 'Todo',
       profile_image_url: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    }
  }

  beforeEach(() => {
    wrapper = mount(
      <Tweet name={data.user.name}
        userPhoto={data.user.profile_image_url}

      />
    )
  });

  it('should render an div tag', () => {
    expect(wrapper.find('div')).toBePresent();
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: data.user.profile_image_url
    });
  });
});
