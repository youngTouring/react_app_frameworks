import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { ItemKeyValue } from "../../../../entities/UserData";
import { randomString } from "../../../../helpers/RandomString";
import { EditButton } from "../../../../shared/styleHelpers/components/ActionButton";
import { CustomBox, Label, TagInput, TagInputBox, TagsContainer } from "../styles/CommonStyles";

const TagInputBoxWrapper = styled(TagInputBox)`
    width: 100%;
`;

const TagInputWrapper = styled(TagInput)`
    width: 100%;
`;

interface IProps {
    items: ItemKeyValue,
    onChange: (items: ItemKeyValue) => void
}

function ServicesEdit(props: IProps) {

    const [focusedId, setFocusedId] = useState("");
    const itemsToShow: JSX.Element[] = [];

    //

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.items, [event.target.id]: event.target.value });
    }

    const handleDelete = (id: string) => {
        let state = { ...props.items };
        if (id in state) delete state[id];
        props.onChange(state);
    }

    const handleAdd = () => {
        let newId = randomString();
        props.onChange({ ...props.items, [newId]: "" });
        setFocusedId(newId)
    }

    //

    for (let itemKey in props.items) {
        let value = props.items[itemKey];

        itemsToShow.push(
            <TagInputBoxWrapper key={itemKey} onClick={() => setFocusedId(itemKey)}>
                <TagInputWrapper id={itemKey} value={value} onChange={(e) => handleChange(e)} />
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
            <Label>Services & projects</Label>
            <TagsContainer>
                {itemsToShow}
            </TagsContainer>
        </CustomBox>
    );
}

export default ServicesEdit;
