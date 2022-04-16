import React, { InputHTMLAttributes } from 'react';

import { Wrapper } from './styles';

const CheckBox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ name, ...props }) => (
    <Wrapper data-testid="checkbox" type="checkbox" name={name} {...props} />
);

export default CheckBox;
