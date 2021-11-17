import styles from "../styles/Layout.module.css"
import Nav from "./Nav"
import Meta from "./Meta"
import Header from "./Header"

const Layout = ({children}) => { //Layout is gonna wrap around component in _app.js ie. <Component {...pageProps} />. so we'll take that component as a child
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children} 
                </main>
            </div>
        </> 
    )
}

export default Layout
