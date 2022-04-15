import React from 'react';

import { render as defaultRender, RenderResult } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';

import { mockRouter } from './__mocks__/NextRouter';
type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

const customRender = (ui: RenderUI, { router }: RenderOptions = {}): RenderResult => {
    const Providers = ({ children }) => (
        <RouterContext.Provider value={{ ...mockRouter, ...router }}>{children}</RouterContext.Provider>
    );

    return defaultRender(ui, { wrapper: Providers });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
