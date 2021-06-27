import { Information } from "../../../../entities/UserData";
import {
    HourlyFeeBox, HourlyFeeCheckboxInput, InformationsContainer, Label, HourlyFeeInput, 
} from "../styles/InformationsStyles";

interface IProps {
    informations: Information,
    onChange: (informations: Information) => void
}

function InformationsEdit(props: IProps) {

    const onHourlyFeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({
            hourlyFee: event.target.value,
            hourlyFeeNegociated: props.informations.hourlyFeeNegociated,
        });        
    }

    const onHourlyFeeNegociatedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let current = props.informations;
        current.hourlyFeeNegociated = event.target.checked;
        props.onChange(current);
    }

    return (
        <InformationsContainer>
            <HourlyFeeBox>
                <Label>Panel informations</Label>
                <HourlyFeeInput value={props.informations?.hourlyFee} onChange={(e) => onHourlyFeeChange(e)} />
                <label htmlFor="negociated">Negociated</label>
                <HourlyFeeCheckboxInput type="checkbox" id="negociated" defaultChecked={props.informations?.hourlyFeeNegociated === true} onChange={(e) => onHourlyFeeNegociatedChange(e)} />
            </HourlyFeeBox>
        </InformationsContainer>
    );
}

export default InformationsEdit;
