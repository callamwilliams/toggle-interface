import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    padding: 0.5rem 0;
    margin-right: 1rem;

    select {
        width: 6.25rem;
        padding: 0.5rem 1rem;
        border: none;
        appearance: none;
        background: #101012;
        color: #ffffff;
    }

    &:after {
        content: '>';
        position: absolute;
        top: 50%;
        right: 0.5rem;
        transform: translateY(-50%) rotate(90deg);
        pointer-events: none;
    }
`;
