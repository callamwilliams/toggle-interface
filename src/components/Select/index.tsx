import React, { InputHTMLAttributes } from 'react';

import { Wrapper } from './styles';

const Select: React.FC<InputHTMLAttributes<HTMLSelectElement>> = ({ ...props }) => (
    <Wrapper>
        <select data-testid="select" {...props}>
            {[...Array(10).keys()]
                .sort((a, b) => b - a)
                .map((number) => (
                    <option key={`select_${number + 1}`}>{number + 1}</option>
                ))}
        </select>
    </Wrapper>
);

export default Select;
