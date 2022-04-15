import React, { InputHTMLAttributes } from 'react';

import { Wrapper } from './styles';

const CheckBox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ name, ...props }) => (
    <Wrapper type="checkbox" name={name} {...props} />
);

export default CheckBox;
