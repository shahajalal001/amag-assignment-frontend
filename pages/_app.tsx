import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.scss'
import {RouteLoader} from "../components/common/preloader";
import {Fragment} from "react";
import dynamic from 'next/dynamic';


function MyApp({Component, pageProps}: any) {
    const Layout = Component.layout || Fragment

    return (
        <>
            <RouteLoader/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

// export default MyApp

export default dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
})
