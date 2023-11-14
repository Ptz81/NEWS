import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Button } from '../UserMenu/UserMenu.styled';

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 4px;
  padding-left: 4px;
  background-color: white;
  min-height: calc(100vh);
`;

// const Button = styled.button`
// margin-left: auto;
// margin-right: auto;
//   width: 200px;
//   background-color: white;
//   margin-top: 3px;
//   color: var(--accentColor);
//   border-radius: 8px;
//   box-shadow: 0 5px 20px 0px #890000;
//   cursor: pointer;
//   &:hover {
//     background-color: var(--base);
//   }
//   &:focus {
//     background-color: var(--base);
//   }
//   font-size: 2em;
//   display: ${(props) => (props.showButton ? 'block' : 'none')};
// `;

const BlogPostBox = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  background-color: var(--base);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  padding: 4px;
`;

const BlogPostItem = styled.div`
  color: var(--accentColor);
  padding: 2px;
`;

const TextLink = styled.a`
  text-decoration: underline;
  color: var(--accentColor);
`;

export function PostList() {
  const [items, setItems] = useState([]);
  const [rowVisibility, setRowVisibility] = useState([true]);
  const [showButton, setShowButton] = useState(true);

  const showAll = () => {
    setRowVisibility(rowVisibility.map(() => true));
    setShowButton(!showButton);
  };

  const fetchData = async () => {
    let url =
      'https://cors-anywhere.herokuapp.com/https://www.mobileworldlive.com/latest-stories/feed/';
    return await fetch(url);
  };

  useEffect(() => {
    const response = fetchData();

    response.then(
      (data) => {
        data.text().then((data2) => {
          const feed = new window.DOMParser().parseFromString(
            data2,
            'text/xml'
          );
          const itemsRemote = feed.querySelectorAll('item');
          const feedItems = [...itemsRemote].map((el) => ({
            link: el.querySelector('link')?.innerHTML,
            title: el.querySelector('title')?.innerHTML,
          }));
          setRowVisibility(
            Array.from(Array(Object.keys(feedItems).length), (_k, idx) =>
              idx < 3 ? true : false
            )
          );
          setItems(feedItems);
          setShowButton(feedItems.length > 3);
        });
      },
      () => {
        const itemsError = [
          { title: 'something went wrong with the request', link: '#' },
        ];
        setRowVisibility(
          Array.from(Array(Object.keys(itemsError).length), (_k, idx) =>
            idx < 3 ? true : false
          )
        );
        setItems(itemsError);
        setShowButton(itemsError.length > 3);
      }
    );
  }, []);

  return (
    <Container id="feedreader">
      <div>
        {items &&
          items.length > 0 &&
          items.map((item, idx) => (
            <BlogPostItem key={idx} display={rowVisibility[idx]}>
              <BlogPostBox>
                +
              </BlogPostBox>
              <div>
                <div>
                  {item.title} |{' '}
                  <TextLink href={item.link} target="_blank" rel="noopener noreferrer">
                    View
                  </TextLink>
                </div>
              </div>
            </BlogPostItem>
          ))}
      </div>
      <Button
        showButton={showButton}
        onClick={() => showAll()}
      >
        Show all
      </Button>
    </Container>
  );
}
