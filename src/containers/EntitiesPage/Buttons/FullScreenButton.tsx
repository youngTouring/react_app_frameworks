import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../../helpers/Layout";
import { setLayout } from "../../../redux/actions/LayoutAction";
import { IGlobalState } from "../../../redux/reducers";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";

const FullScreenButton = () => {

    const dispatch = useDispatch();
    const currentLayout = useSelector((state: IGlobalState) => state.layout);
    const layoutToSet = currentLayout === Layout.DEFAULT ? Layout.FULL_SCREEN : Layout.DEFAULT;
    const icon = currentLayout === Layout.DEFAULT ? faExpandAlt : faCompressAlt;
    
    return (
        <DefaultActionButton onClick={() => dispatch(setLayout(layoutToSet))}>
            <FontAwesomeIcon icon={icon} />
        </DefaultActionButton>
    )
}

export default FullScreenButton;