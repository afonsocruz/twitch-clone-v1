import styled from 'styled-components';

export const VideoSliderStyle = styled.section `
    .slider {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right-arrow {
        position: relative;
        top: 35px;
        right: -650px;
        font-size: 3rem;
        color: #853ce6;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: relative;
        top: 35px;
        left: 0px;
        font-size: 3rem;
        color: #853ce6;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }
`;
