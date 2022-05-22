import React from 'react';
import ServerList from '../ServerList';

import { Container , Role , User , Avatar} from './styles';

interface UserProps{
  nickname:string;
  isBot ?: boolean;
}

interface CategoryProps{
    roleName: string;
    users : [
      {"nome":string}
    ];
}



const UserList: React.FC= () => {
  
  return (
    <Container>
        <UserCategory users ={[
          {"nome":"pedrinnnnn"}
          
          ]} roleName='Admin'/>
          <UserCategory users ={[
          {"nome":"pedrinnnnn"}
          
          ]} roleName='Disponivel'/>
          <UserCategory  users ={[
          {"nome":"pedrinnnnn"}
          
          ]} roleName='Offline'/>
    </Container>
  )
}

const UserCategory : React.FC<CategoryProps> = ({ roleName , users }) =>{
  return(
    <>
      <Role>{roleName}</Role>
      {users.map((userss) => (
         <UserRow nickname = {userss.nome}/>
      ))}
    </>
      // <Role>Disponivel</Role>
      // <UserRow nickname = "pedrinnnnn"/>
        
      // <Role>Offline</Role>
      // <UserRow nickname = "antigo-pedrinnnnnn" isBot/> 
  )
}

const UserRow : React.FC<UserProps> = ({nickname , isBot}) =>{
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}
export default UserList;