import classes from "./HeaderAnchor.module.css"

function HeaderAnchor() {
    return <div className={classes.titleWrapper}>
        <a className={classes.link} href="#"><span className={classes.title}>About</span></a>
        <a className={classes.link} href="#"><span className={classes.title}>Portfolio</span></a>
        <a className={classes.link} href="#"><span className={classes.title}>FAQ</span></a>
        <a className={classes.link} href="#"><span className={classes.title}>Rewards
</span></a>
        <a className={classes.link} href="#"><span className={classes.title}>PRO</span></a>
    </div>
}


export default HeaderAnchor