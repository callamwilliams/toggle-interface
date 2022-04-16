import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3.75rem;
    background: #002a54;
    padding-left: 0.625rem;
`;

export const Main = styled.main`
    width: 100%;
    margin: 0 auto;
    padding: 7.5rem 0;
`;

export const Page = styled.div`
    min-height: 100vh;
    @media (min-width: 48rem) {
        padding-left: 17.5rem;
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.25rem;
    background: #002a54;
    border-radius: 0.625rem;
    text-transform: uppercase;
    cursor: pointer;
`;

export const MenuButton = styled.button`
    padding: 0.25rem 1rem;
    background: #0d0d0f;
    border: 1px solid #fff;
    border-radius: 0.3125rem;
    font-size: 0.8125rem;
    margin-right: 1rem;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    @media (min-width: 48rem) {
        display: none;
    }
`;
