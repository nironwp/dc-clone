import React from 'react';
import ServerButton from "../ServerButton"
import { Container , Separator} from './styles';

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton isHome/>

          <Separator/>

          <ServerButton/>
          <ServerButton hasNotifications/>
          <ServerButton hasNotifications mentions = {1}/>
          <ServerButton hasNotifications/>
          <ServerButton hasNotifications mentions = {1}/>
          <ServerButton hasNotifications mentions = {5}/>
          <ServerButton hasNotifications mentions = {24}/>
          <ServerButton/>
          <ServerButton/>
          <ServerButton hasNotifications mentions = {20}/>
          <ServerButton hasNotifications mentions = {6}/>
          <ServerButton hasNotifications mentions = {22}/>
          <ServerButton hasNotifications mentions = {13}/>
          <ServerButton hasNotifications mentions = {34}/>
          <ServerButton hasNotifications mentions = {93}/>
          <ServerButton hasNotifications/>
          <ServerButton hasNotifications/>
          <ServerButton hasNotifications mentions = {400}/>
          <ServerButton hasNotifications mentions = {193}/>
          <ServerButton hasNotifications mentions = {32}/>
          <ServerButton hasNotifications mentions = {2}/>
          <ServerButton hasNotifications mentions = {124}/>
          <ServerButton hasNotifications mentions = {6}/>
          <ServerButton hasNotifications/>
      </Container>
  );
}

export default ServerList;