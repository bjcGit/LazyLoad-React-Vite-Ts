import { lazy, LazyExoticComponent } from "react"
import { NoLazy } from "../no-found/NoLazy"
import { ShoppingPage } from "../pages/ShoppingPage/ShoppingPage"
import { ControlProps } from "../pages/ControlProps/ControlProps"
// import { LazyThree, LazyTwo, LazyOne } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    name: string,
    Component:  LazyExoticComponent< JSXComponent> | JSXComponent
}


const LazyLayout = lazy( () => import('../layout/LazyLayout') )


export const routes: Route[] = [
    {
        path: 'lazyload/*',
        to: './lazyload',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        path: 'shopping/*',
        to: './shopping',
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to: './no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    {
        to: './control',
        path: 'control',
        Component: ControlProps,
        name: 'Control Props'
    },

]