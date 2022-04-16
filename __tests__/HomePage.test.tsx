import React from 'react';

import { screen } from '@testing-library/react';
import * as Formik from 'formik';

import HomePage from '../src/pages';
import { render } from '../test.render';

jest.spyOn(Formik, 'useFormikContext');

describe('Expect <HomePage>', () => {
    it('to render', () => {
        render(<HomePage />);
        expect(screen.getByText('general')).toBeInTheDocument();
        expect(screen.getByText('settings')).toBeInTheDocument();
        expect(screen.getByText('alerts')).toBeInTheDocument();
        expect(screen.getAllByText('Case Management')).toHaveLength(2);
        expect(screen.getAllByText('users-add')).toHaveLength(2);
    });
});
