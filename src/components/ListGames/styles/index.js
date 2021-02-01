import styled from 'styled-components';

export const ListGamesStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32px auto;
    flex-wrap: wrap;

    .cardGame {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 8px 8px;
    }

    .cardGame img {
        width: 200px;
        cursor: pointer;
    }

    .cardGame span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200px;
        cursor: pointer;
        margin-top: 4px;
        font-size: 14px;
        font-weight: 500;
    }
`;

