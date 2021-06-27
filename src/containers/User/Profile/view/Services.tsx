import { useSelector } from "react-redux";
import { ItemKeyValue } from "../../../../entities/UserData";
import { IGlobalState } from "../../../../redux/reducers";
import { CustomBox, InfoText, Label } from "../styles/CommonStyles";

function Services() {

    const userData = useSelector((state: IGlobalState) => state.userData);

    const items: JSX.Element[] = [];
    const services: ItemKeyValue = (userData?.services !== null && userData?.services !== undefined ? userData.services : {})
    for (let key in services) {
        let val = services[key];
        items.push(<InfoText key={key}>{val}</InfoText>);
    }

    return (
        <CustomBox>
            <Label>Services & projects</Label>
            {items}
        </CustomBox>
    );
}

export default Services;
