import React from 'react';
import ServerList from '../ServerList';

import { Container , Title , ExpandIcon} from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
        <Title>Server Name</Title>

        <ExpandIcon/>
    </Container>
  )
}

export default Layout;