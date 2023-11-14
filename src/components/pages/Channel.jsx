import { ChannelBar } from "../AppBar/ChannelBar";
import { ChannelForm } from "../Channel/ChannelForm";
import { ChannelList } from "../Channel/ChannelList";

export default function Channel() {

  return (
    <div>
      <ChannelBar /> 
      <ChannelForm />
      <ChannelList/>
    </div>



  );
}