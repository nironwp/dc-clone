import React from 'react';
import ChannelMessage , { Mention }from '../ChannelMessage';


import { Container , Messages , InputWrapper , Input , InputIcon} from './styles';

const ChannelData: React.FC = () => {
  return (
    <Container>
       <Messages>
         <ChannelMessage
            author='ƧƧ・Niron'
            date='29/05/2020'
            content = "foi"
         />
         <ChannelMessage
            author='ƧƧ・Niron'
            date='29/05/2020'
            content = "Treino agora?"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='29/05/2020'
            content = "Daqui 10 minutos , só vamo jogar umas ranked juntos por hoje"
         />
         <ChannelMessage
            author='ƧƧ・Niron'
            date='29/05/2020'
            content = "Agr que fui ver , só terminar de carregar o cel aqui e eu entro"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='29/05/2020'
            content = "Tá blz"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='29/05/2020'
            content = {
              <><Mention>@ƧƧ・Niron </Mention> vc vai ter q entrar no gp do wpp man, todas as informações eu tô passando lá, ent man, entra no gp do wpp.</>
            }
            hasMention
         />
        <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='29/05/2020'
            content = "Veja esse video: https://youtu.be/F3mbG2iXjXY"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='29/05/2020'
            content = "Lá está explicando como tudo da fase de equipes vai funcionar."
         />
         <ChannelMessage
            author='ƧƧ・Niron'
            date='29/05/2020'
            content = "Bora treino"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='29/05/2020'
            content = "Vamo hoje não"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='29/05/2020'
            content = "esqueci que a gente tinha campeonato"
         />
         <ChannelMessage
            author='ƧƧ・Niron'
            date='29/05/2020'
            content = "Kkkkkkkkkkkkkkkkkkkk"
         />
         <ChannelMessage
            author='ƧƧ・Niron'
            date='29/05/2020'
            content = "blz"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='01/06/2020'
            content = {
              <>
                entra call <Mention>@ƧƧ・ Niron</Mention> <Mention>@ƧƧ・ Balu</Mention> <Mention>@ƧƧ・ Luck</Mention> <Mention>@ƧƧ・ Mep</Mention>
              </>
            }
            hasMention
         />
         <ChannelMessage
            author="ƧƧ・Balu"
            date ="01/06/2020"
            content = "entrei"
         />
         <ChannelMessage
            author='@ƧƧ・ Luck'
            date='01/06/2020'
            content = "to entrando"
         />
         <ChannelMessage
            author='@ƧƧ・ Mep'
            date='01/06/2020'
            content = "jaja entro"
         />
         <ChannelMessage
            author='ƧƧ・Niron'
            date='01/06/2020'
            content = "to jogando uma , 2 min pra acabar"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='01/06/2020'
            content = "Tá blz"
         />
         <ChannelMessage
            author='ƧƧ・SpŁAsH_ηot'
            date='05/05/2022'
            content = "Quanto tempo rapaziada?"
         />

       </Messages>

       <InputWrapper>
        <Input type="text" placeholder = "Conversa em chat-livre"/>
        <InputIcon/>
       </InputWrapper>
    </Container>
  )
}

export default ChannelData;