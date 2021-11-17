import headerStyles from "../styles/Header.module.css"

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}><span>Web Dev</span> News</h1>
        </div>
    )
}

export default Header
