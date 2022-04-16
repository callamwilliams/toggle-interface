import React from 'react';

import { Wrapper } from './styles';

interface SideBarProps {
    menu: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ children, menu }) => <Wrapper menu={menu}>{children}</Wrapper>;

export default SideBar;
