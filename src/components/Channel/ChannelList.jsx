import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/filter/constants.js";
import { ListGroup } from "react-bootstrap";
import { Channel } from "./Channel.jsx";
import { getChannel } from "../../redux/channel/selector.js";
import { getStatusFilter } from "../../redux/filter/selector.js";

const getFavoriteChannel = (items, statusFilter) => {
   if (!items) {
    return null; 
  }
  switch (statusFilter) {
    case statusFilters.favorites:
      return items.filter(task => task.favorites);
    default:
      return items;
  }
}

export const ChannelList = () => {
  const items = useSelector(getChannel);
  const statusFilter = useSelector(getStatusFilter);
  const favoriteChannel = getFavoriteChannel(items, statusFilter);

  return (
    <ListGroup as="ol" numbered>
      {favoriteChannel.map(item => (
        <ListGroup.Item  action style={{ display: 'flex' }} variant="info" as="li" mr="3" key={item.id}>
            <Channel item={item} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};