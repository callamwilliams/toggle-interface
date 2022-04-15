import React, { useEffect, useState } from 'react';

import { Field, useFormikContext } from 'formik';

import { ICurrentItem } from '../../interfaces/ICurrentItem';
import CheckBox from '../CheckBox';
import Select from '../Select';
import { ControlGroup, Group, Inner, Label } from './styles';

interface ItemCount {
    value: boolean;
    count: string;
}

interface ItemGroupProps {
    category?: string;
    item: ICurrentItem;
}

const ItemGroup: React.FC<ItemGroupProps> = ({ item }) => {
    const [toggle, setToggle] = useState(item.value);
    const { setFieldValue, values } = useFormikContext();

    const handleClose = () =>
        Object.entries(values[item.id])?.map(([key, value]: [string, boolean | ItemCount]) => {
            if (typeof value === 'object') {
                setFieldValue(`${item.id}.${key}.value`, false);
            } else {
                setFieldValue(`${item.id}.${key}`, false);
            }
        });

    useEffect(() => {
        if (!toggle) {
            handleClose();
        }
    }, [toggle]);

    return (
        <>
            <Group>
                <p>{item.label}</p>
                <CheckBox
                    id={`${item.type}_${item.id}`}
                    name={`${item.type}_${item.id}`}
                    checked={toggle}
                    onChange={() => setToggle(!toggle)}
                />
                <Label htmlFor={`${item.type}_${item.id}`}>{item.label && item.label}</Label>
            </Group>
            {toggle
                ? Object.entries(values[item.id])?.map(([key, value]: [string, boolean | ItemCount]) => (
                      <Inner key={`child_${key}`}>
                          <p>{key}</p>
                          <ControlGroup>
                              {typeof value === 'object' ? (
                                  <>
                                      <Field name={`${item.id}.${key}.count`} as={Select} value={value.count} />
                                      <CheckBox id={key} checked={value.value} name={`${item.id}.${key}.value`} />
                                      <Label htmlFor={key}>{key}</Label>
                                  </>
                              ) : (
                                  <>
                                      <CheckBox id={key} checked={value} name={`${item.id}.${key}`} />
                                      <Label htmlFor={key}>{key}</Label>
                                  </>
                              )}
                          </ControlGroup>
                      </Inner>
                  ))
                : null}
        </>
    );
};

export default ItemGroup;
