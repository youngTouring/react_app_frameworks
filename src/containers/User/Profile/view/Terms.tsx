import { useSelector } from "react-redux";
import { Attachment } from "../../../../entities/UserData";
import { IGlobalState } from "../../../../redux/reducers";
import { CustomBox, FileNameText, InputDataWrapper, InputImageWrapper, Label, TagInputBox } from "../styles/CommonStyles";

function Terms() {

    const userData = useSelector((state: IGlobalState) => state.userData);

    const items: JSX.Element[] = [];
    const terms: Attachment = (userData?.terms !== null && userData?.terms !== undefined ? userData.terms : {})
    for (let key in terms) {
        const file = terms[key];
        const fileName = file !== null ? file.name : "";
        const isImage = file !== null && file.type.split('/')[0] === 'image';
        const fileUrl = isImage ? URL.createObjectURL(file) : "";

        items.push(
            <TagInputBox key={key}>
                {isImage && fileUrl !== "" ? <InputImageWrapper src={fileUrl} /> : null}
                <InputDataWrapper>
                    <FileNameText>{fileName}</FileNameText>
                </InputDataWrapper>
            </TagInputBox>
        );
    }

    return (
        <CustomBox>
            <Label>Terms & conditions</Label>
            {items}
        </CustomBox>
    );
}

export default Terms;
