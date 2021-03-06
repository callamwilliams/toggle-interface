import styled from 'styled-components';

export const Wrapper = styled.div<{ menu: boolean }>`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: ${({ menu }) => (menu ? '100vh' : '0')};
    width: 100%;
    overflow: auto;
    background: #242f3f;
    font-size: 0.8125rem;
    line-height: 1rem;

    #sidebar {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 5rem 0 1rem;

        @media (min-width: 48rem) {
            padding: 2rem 0 1rem;
        }
    }

    @media (min-width: 48rem) {
        position: fixed;
        display: block;
        bottom: initial;
        min-height: 100vh;
        width: 17.1875rem;
        padding: 5rem 0.625rem 1.25rem;
        border-right: #d5d5d5;
    }
`;
