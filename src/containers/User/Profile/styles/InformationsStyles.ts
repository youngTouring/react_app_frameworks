import styled from "styled-components";
import Color from "../../../../shared/styleHelpers/Colors";
import { Label as CommonLabel, InfoText, CustomBox } from "./CommonStyles";

export const InformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HourlyFeeBox = styled(CustomBox)``;
export const TermsAndConditionsBox = styled(CustomBox)``;

export const Label = styled(CommonLabel)`
    color: ${Color.gray};
    padding: 2px 0;
    margin-bottom: 3px;
`;

export const HourlyFeeText = styled(InfoText)``;
export const TermsAndConditionsText = styled(InfoText)``;

export const HourlyFeeCheckboxInput = styled.input`
    margin: 4px 0;
`;
export const HourlyFeeInput = styled.input`
    color: ${Color.blue};
    border: none;
    outline: none;
    background-color: rgb(230, 240, 243);
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 900;
    margin-right: 2px;
`;