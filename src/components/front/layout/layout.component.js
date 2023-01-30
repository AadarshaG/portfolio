import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header/header.component'
import { Footer } from '../footer/footer.component'

export function Layout(){

    return(
        <>
            <Header></Header>
                <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}