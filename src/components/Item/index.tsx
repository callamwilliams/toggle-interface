import React from 'react';

import { Field, useFormikContext } from 'formik';

import { ICurrentItem } from '../../interfaces/ICurrentItem';
import CheckBox from '../CheckBox';
import Select from '../Select';
import ItemGroup from './ItemGroup';
import { Wrapper, Inner, ControlGroup, Label } from './styles';

interface ItemProps {
    item: ICurrentItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const { values } = useFormikContext();

    return (
        <Wrapper>
            {item.type === 'group' ? (
                <ItemGroup item={item} />
            ) : (
                <Inner>
                    <p>{item.label}</p>
                    <ControlGroup>
                        {item.count && <Field name={`${item.id}.count`} as={Select} value={values[item.id].count} />}
                        <CheckBox id={item.id} name={`${item.id}`} />
                        <Label htmlFor={item.id}>{item.label}</Label>
                    </ControlGroup>
                </Inner>
            )}
        </Wrapper>
    );
};

export default Item;
