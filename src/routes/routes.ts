import { lazy, LazyExoticComponent } from "react"
// import { LazyThree, LazyTwo, LazyOne } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    name: string,
    Component:  LazyExoticComponent< JSXComponent> | JSXComponent
}


const Lazy1 = lazy( () => import('../01-lazyload/pages/LazyOne') )
const Lazy2 = lazy( () => import('../01-lazyload/pages/LazyTwo') )
const Lazy3 = lazy( () => import('../01-lazyload/pages/LazyThree') )

export const routes: Route[] = [
    {
        to: './lazyOne',
        path: 'lazyone',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: './lazyTwo',
        path: 'lazytwo',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: './lazyThree',
        path: 'lazythree',
        Component: Lazy3,
        name: 'Lazy-3'
    },
]