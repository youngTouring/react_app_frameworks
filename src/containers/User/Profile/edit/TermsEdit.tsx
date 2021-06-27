import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { Attachment } from "../../../../entities/UserData";
import { randomString } from "../../../../helpers/RandomString";
import { EditButton } from "../../../../shared/styleHelpers/components/ActionButton";
import { CustomBox, Label, TagInputBox, TagInput, FileNameText, InputImageWrapper, InputDataWrapper } from "../styles/CommonStyles";

const TagInputBoxWrapper = styled(TagInputBox)`
    width: 100%;
`;

const TagInputWrapper = styled(TagInput)`
    position: absolute;
    width: 100%;
    z-index: 10;
    opacity: 0;
`;

interface IProps {
    items: Attachment,
    onChange: (items: Attachment) => void
}

function TermsEdit(props: IProps) {
    const [focusedId, setFocusedId] = useState("");
    const itemsToShow: JSX.Element[] = [];

    //

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null && event.target.files.length > 0) {
            props.onChange({ ...props.items, [event.target.id]: event.target.files[0] });
        }
    }

    const handleDelete = (id: string) => {
        let state = { ...props.items };
        if (id in state) delete state[id];
        props.onChange(state);
    }

    const handleAdd = () => {
        let newId = randomString();
        props.onChange({ ...props.items, [newId]: null });
        setFocusedId(newId)
    }

    //

    for (let itemKey in props.items) {
        const file = props.items[itemKey];
        const fileName = file !== null ? file.name : "";
        const isImage = file !== null && file.type.split('/')[0] === 'image';
        const fileUrl = isImage ? URL.createObjectURL(file) : "";

        itemsToShow.push(
            <TagInputBoxWrapper key={itemKey} onClick={() => setFocusedId(itemKey)}>
                {isImage && fileUrl !== "" ? <InputImageWrapper src={fileUrl} /> : null}
                <InputDataWrapper>
                    <FileNameText>{fileName === "" ? "Select file" : fileName}</FileNameText>
                    <TagInputWrapper id={itemKey} type="file" onChange={(e) => handleChange(e)} />
                </InputDataWrapper>
                {
                    focusedId === itemKey ? (
                        <EditButton onClick={() => handleDelete(itemKey)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </EditButton>
                    ) : null
                }
            </TagInputBoxWrapper>
        );
    }

    itemsToShow.push(
        <TagInputBox key={"key-" + randomString()}>
            <EditButton onClick={() => handleAdd()}>
                <FontAwesomeIcon icon={faPlus} />
            </EditButton>
        </TagInputBox>
    )

    //

    return (
        <CustomBox>
            <Label>Terms & conditions</Label>
            {itemsToShow}
        </CustomBox>
    );
}

export default TermsEdit;
