import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";
import { ShareText } from "../styles/EntitiesPageStyles";

const ShareButton = () => {

    const onClick = () => {
        const currentHref = window.location.href;
        navigator.clipboard.writeText(currentHref)
    }

    return (
        <DefaultActionButton onClick={onClick}>
            <FontAwesomeIcon icon={faShare}/>
            <ShareText>Share</ShareText>
        </DefaultActionButton>
    )
}

export default ShareButton;