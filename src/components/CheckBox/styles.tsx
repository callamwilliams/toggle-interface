import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled(Field)`
    display: flex;

    width: 0;
    height: 0;
    visibility: hidden;

    &:checked + label {
        background: #65a2f8;
    }

    &:checked + label:after {
        left: calc(100% - 0.1875rem);
        transform: translateX(-100%);
    }
`;
