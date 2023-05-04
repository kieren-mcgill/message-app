import styles from './styles/Header-styling.module.css'
import {Link} from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
    return(
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>ComYoon</h1>
            <div>
                <div>
                    <Link to="/"><ForumIcon /></Link>
                </div>
                <div>
                    <Link to="/my-activity"><AccountCircleIcon /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header