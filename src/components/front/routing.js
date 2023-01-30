import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './home/home.component'
import { Layout } from './layout/layout.component'

export function  AppRouting(){


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<HomePage></HomePage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}