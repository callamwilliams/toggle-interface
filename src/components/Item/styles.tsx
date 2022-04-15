import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    margin-bottom: 1rem;
    padding: 1rem;
    background: #18191d;
    border-radius: 0.625rem;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    width: 100%;
`;

export const Group = styled(Inner)`
    margin: 1rem 0;
    padding-bottom: 1.75rem;
    border-bottom: 2px solid #202125;
`;

export const ControlGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const Label = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 40px;
    height: 19px;
    background: grey;
    display: block;
    border-radius: 10px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0.125rem;
        left: 0.1875rem;
        width: 0.9375rem;
        height: 0.9375rem;
        background: #fff;
        border-radius: 2.8125rem;
        transition: 0.3s;
    }

    &:active:after {
        width: 13px;
    }
`;
