import styles from './modules/Layout.module.css'
import {AppHeader} from "./AppHeader.tsx";
import {Outlet} from "react-router-dom";
export const Layout = () => {
    return(
        <div className={styles.app}>
            {/*<AppHeader></AppHeader>*/}
            <Outlet></Outlet>
        </div>
    )
}