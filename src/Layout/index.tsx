import React from 'react';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ServerList from '../ServerList';
import ServerName from "../ServerName"
import UserInfo from "../UserInfo"
import UserList from '../UserList';
import ChannelData from "../ChannelData"

import { Grid } from './styles';

const Layout: React.FC = () => {
  const roles = [
    {id:1,roleName : "Disponivel" },
    {id:2,roleName : "Offline" },
    {id:3,roleName : "Admin" }
  ]
  return (
    <Grid>
      <ServerList/>
      <ServerName/>
      <ChannelInfo/>
      <ChannelList/>
      <UserInfo/>
      <ChannelData/>
      <UserList/>
    </Grid>
  ) ;
}

export default Layout;