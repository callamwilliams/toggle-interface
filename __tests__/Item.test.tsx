import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik, Form } from 'formik';

import { mockData } from '../__mocks__/mockData';
import Item from '../src/components/Item';
import { render } from '../test.render';

describe('Expect <Item>', () => {
    it('to render an item with a default value', () => {
        render(
            <Formik initialValues={mockData.values} onSubmit={jest.fn()}>
                <Item item={mockData.schema.general[0]} />
            </Formik>
        );

        expect(screen.getAllByText('Case Management')).toHaveLength(2);
        expect(screen.getByTestId('checkbox')).toBeChecked();
    });
    it('to render an item with a count', () => {
        render(
            <Formik initialValues={mockData.values} onSubmit={jest.fn()}>
                <Item item={mockData.schema.alerts[0]} />
            </Formik>
        );

        expect(screen.getByTestId('select')).toBeInTheDocument();
    });
    it('to uncheck an item', async () => {
        render(
            <Formik initialValues={mockData.values} onSubmit={jest.fn()}>
                <Item item={mockData.schema.general[0]} />
            </Formik>
        );

        expect(screen.getByLabelText('Case Management')).toBeInTheDocument();
        expect(screen.getByTestId('checkbox')).toBeChecked();
        userEvent.click(screen.getByLabelText('Case Management'));
        await waitFor(() => expect(screen.getByTestId('checkbox')).not.toBeChecked());
    });
    it('to render a group item', () => {
        render(
            <Formik initialValues={mockData.values} onSubmit={jest.fn()}>
                <Item item={mockData.schema.settings[1]} />
            </Formik>
        );

        expect(screen.getByLabelText('Users')).toBeInTheDocument();
        expect(screen.getAllByTestId('checkbox')[0]).toBeChecked();
        expect(screen.getByLabelText('users-add')).toBeInTheDocument();
        expect(screen.getByLabelText('users-edit')).toBeInTheDocument();
    });
    it('to hide all values when parent is unchecked', async () => {
        render(
            <Formik initialValues={mockData.values} onSubmit={jest.fn()}>
                <Item item={mockData.schema.settings[1]} />
            </Formik>
        );

        expect(screen.getByLabelText('Users')).toBeInTheDocument();
        expect(screen.getAllByTestId('checkbox')[0]).toBeChecked();
        userEvent.click(screen.getByLabelText('Users'));
        await waitFor(() => expect(screen.queryByLabelText('users-add')).not.toBeInTheDocument());
        await waitFor(() => expect(screen.queryByLabelText('users-edit')).not.toBeInTheDocument());
    });
    it('to clear all values when parent is unchecked', async () => {
        const handleSubmit = jest.fn((values) => values);

        render(
            <Formik initialValues={mockData.values} onSubmit={(values) => handleSubmit(values.users)}>
                {() => (
                    <Form>
                        <Item item={mockData.schema.settings[1]} />
                        <button type="submit">Mock Submit Button</button>
                    </Form>
                )}
            </Formik>
        );

        expect(screen.getByLabelText('Users')).toBeInTheDocument();
        expect(screen.getAllByTestId('checkbox')[0]).toBeChecked();
        userEvent.click(screen.getByText('Mock Submit Button'));
        await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                'users-add': false,
                'users-delete': false,
                'users-edit': false,
                'max-users': {
                    value: false,
                    count: '10',
                },
            })
        );
    });
});
