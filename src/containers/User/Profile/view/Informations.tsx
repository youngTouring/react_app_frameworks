import { useSelector } from "react-redux";
import { IGlobalState } from "../../../../redux/reducers";
import { HourlyFeeBox, HourlyFeeText, InformationsContainer, Label } from "../styles/InformationsStyles";

function Informations() {

    const userDataInformations = useSelector((state: IGlobalState) => state.userData?.informations);

    const hourlyFeeNegociated = userDataInformations?.hourlyFeeNegociated;
    const hourlyFeeText = userDataInformations?.hourlyFee + (hourlyFeeNegociated ? " (Negociated)" : "");

    return (
        <InformationsContainer>
            <HourlyFeeBox>
                <Label>Panel informations</Label>
                <HourlyFeeText>{hourlyFeeText}</HourlyFeeText>
            </HourlyFeeBox>
        </InformationsContainer>
    );
}

export default Informations;
