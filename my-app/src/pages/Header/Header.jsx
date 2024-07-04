import HeaderAnchor from "../../components/HeaderAnchor/HeaderAnchor";
import Logotype from "../../components/Logotype/Logotype";
import classes from "./header.module.css"
import Wrapper from "../../components/wrapper/Wrapper";
import Button from "../../components/button/Button";
import DetectOS from "../../components/detect/Detect";
import DetectButton from "../../components/button/Button";

function Header() {

    return <Wrapper className={classes.headerColor} children={<div className={classes.headerWrapper}>
        <div className={classes.left}>
            <Logotype/>
            <HeaderAnchor/>
            <DetectOS/>
        </div>
        <DetectButton/>
    </div>
    }/>

}

export default Header