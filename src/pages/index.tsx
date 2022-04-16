import React from 'react';

import { Formik } from 'formik';

import Item from '../components/Item';
import { Portal } from '../components/Portal';
import { Button } from '../styles/global';
import { Wrapper, Block } from '../styles/pages';
import { getDefaultValues } from '../utils/getDefaultValues';
import { schema } from '../utils/schema';

const fieldItems = Object.values(schema)
    .map((group) => group)
    .flat();

const HomePage: React.FC = () => {
    const defaultValues = getDefaultValues(fieldItems);

    const onSubmit = async (values, { resetForm }) => {
        resetForm();
    };

    return (
        <Formik initialValues={defaultValues} onSubmit={onSubmit}>
            {({ handleSubmit, values }) => (
                <Wrapper id="form" onSubmit={handleSubmit} className="advanced-form">
                    {Object.entries(schema)?.map(([key, value], index) => (
                        <Block key={`section_${key}`} tabIndex={index}>
                            <h3>{key}</h3>
                            {value?.map((item, idx) => (
                                <Item key={`card_${key}_${idx}`} item={item} />
                            ))}
                        </Block>
                    ))}

                    <Portal selector="#sidebar">
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                        <Button type="submit" form="form">
                            Reset to default values
                        </Button>
                    </Portal>
                </Wrapper>
            )}
        </Formik>
    );
};

export default HomePage;
