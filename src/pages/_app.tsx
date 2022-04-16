import React, { useState } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'normalize.css';
import '../styles/core.css';
import Image from 'next/image';

import SideBar from '../components/SideBar';
import { Header, Main, Page, Container, MenuButton } from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <Head>
                <title>Toggle Interface</title>
                <meta name="description" content="" />
                <meta property="og:title" content="" key="title" />
                <meta name="theme-color" content="#24249B" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover, minimum-scale=1"
                />
            </Head>
            <Header>
                <Image src="/logo.png" alt="logo" width="60" height="60" />
                <MenuButton type="button" onClick={() => setMenu(!menu)}>
                    {menu ? 'Close' : 'Menu'}
                </MenuButton>
            </Header>
            <Page>
                <SideBar menu={menu}>
                    <div id="sidebar" />
                </SideBar>
                <Main>
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </Main>
            </Page>
        </>
    );
};

export default App;
