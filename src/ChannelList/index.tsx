import React from 'react';
import ChannelButton from '../ChannelButton';
import ServerList from '../ServerList';

import {Container , Category , AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
        <Category>
          <span>Canais de texto</span>
          <AddCategoryIcon/>
        </Category>

        <ChannelButton selected channelName = "chat-livre"/>
        <ChannelButton channelName = "trabalho"/>
        <ChannelButton channelName = "lolzinho"/>
        <ChannelButton channelName = "cs-go"/>
        <ChannelButton channelName = "valorant"/> 
        <ChannelButton channelName='Cinema'/>
    </Container>
  )
}

export default ChannelList;