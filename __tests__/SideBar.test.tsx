import React from 'react';

import { screen } from '@testing-library/react';
import * as Formik from 'formik';

import SideBar from '../src/components/SideBar';
import HomePage from '../src/pages';
import { render } from '../test.render';

jest.spyOn(Formik, 'useFormikContext');

describe('Expect <HomePage>', () => {
    it('to render', () => {
        render(
            <SideBar menu>
                <p>test sidebar content</p>
            </SideBar>
        );
        expect(screen.getByText('test sidebar content')).toBeInTheDocument();
    });
    it('to populate the portal', () => {
        // eslint-disable-next-line testing-library/no-node-access
        let portalRoot = document.getElementById('sidebar');
        if (!portalRoot) {
            portalRoot = document.createElement('div');
            portalRoot.setAttribute('id', 'sidebar');
            document.body.appendChild(portalRoot);
        }
        render(<HomePage />);
        expect(
            screen.getByText(
                // eslint-disable-next-line max-len
                /\{ "case-management": true, "map-timeline": true, "views-&-briefings": false, "notifications": false, "mass-communications": true, "traffic-cameras": true, "audit-log": false, "users": { "users-add": true, "users-delete": true, "users-edit": false, "max-users": \{ "value": false, "count": "10" } }, "alert-manager": { "alert-rules": { "value": true, "count": "3" } } }/i
            )
        ).toBeInTheDocument();
    });
});
