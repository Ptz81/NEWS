import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "../../redux/filter/constants.js";
import { setStatusFilter } from "../../redux/channel/actions.js";
import { StatusButton } from "./StatusFilter.styled.js";


export const StatusFilter = () => {
    const dispatch = useDispatch();  
    const filter = useSelector(state => state.filters.status);
    
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div>
          <StatusButton
              style={{marginRight: "10px"}}
        variant="primary"
      className="ms-2"
        active={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
        >
        All</StatusButton>
      <StatusButton
        variant="info"
        className="ms-2"
        active={filter === statusFilters.favorites}
        onClick={() => handleFilterChange(statusFilters.favorites)}
        >
        Favorites
        </StatusButton>
    </div>
  );
};