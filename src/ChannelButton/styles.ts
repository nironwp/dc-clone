import styled from 'styled-components';
import { Hashtag ,PersonAdd ,Settings } from "../styles/Icons"
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
    padding: 5px 3px;

    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;
    .secondDive{
        display: none;
    }
    &:hover{
        .secondDive{
            display: flex;
        }
    }
    &.active{
        .secondDive{
            display: flex;
        }
    }

    > div{
        display: flex;
        align-items: center;
    }

    >div span{
        color: var(--senary);
        margin-left: 5px;
    }

    &:hover ,&.active{
        background-color: var(--quinary);

        > div span{
            color: var(--white);
        }
    }

`;

export const HashTagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
    
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;
