import styled from 'styled-components';

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    text-transform: uppercase;
`;

export const Block = styled.div`
    margin-bottom: 2rem;

    h3 {
        margin-bottom: 1.5rem;
    }
`;
