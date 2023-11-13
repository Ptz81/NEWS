import { ChannelCounter } from "../Counter/Counter";
import { StatusFilter } from "../Filter/StatusFilter";
import { ContainerBar, SectionBar, TitleBar } from "./ChannelBar.styled";

export const ChannelBar = () => {
  return (
<ContainerBar>
        <SectionBar>
        <TitleBar>Channels</TitleBar>
        <ChannelCounter />
      </SectionBar>
      <SectionBar>
        <TitleBar>Filter by status</TitleBar>
        <StatusFilter />
      </SectionBar>  
</ContainerBar>
      

  );
};