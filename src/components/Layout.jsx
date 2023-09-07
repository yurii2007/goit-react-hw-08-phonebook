import { Suspense } from "react"
import { Header } from "./Header/Header"
import { Loader } from "./Loader/Loader"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (<>
    <Header />
    <main>
    <Suspense fallback={<Loader />}>
        <Outlet />
    </Suspense>
    </main>
    </>)
}