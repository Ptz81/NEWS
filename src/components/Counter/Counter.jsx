import { useSelector } from "react-redux";
import { getChannel } from "../../redux/channel/selector";
import { Counter, Favorite } from "./Counter.styled";

export const ChannelCounter = () => {
  const items = useSelector(getChannel);

  const count = items.reduce(
     (acc, channel) => {
      acc.all += 1;

      if (channel.favorites) {
        acc.favorites += 1; 
      }
      return acc;
    },
    { all: 0, favorites: 0 }
  );

  return (
      <Counter>
        <Favorite>Total channels: {count.all}</Favorite>  
       <Favorite>Favorites: {count.favorites}</Favorite>
    </Counter>
  );
};