import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ItemKeyValue } from "../../../../entities/UserData";
import { randomString } from "../../../../helpers/RandomString";
import { EditButton } from "../../../../shared/styleHelpers/components/ActionButton";
import { Label, TagInput, TagInputBox, TagsContainer } from "../styles/CommonStyles";

interface IProps {
    title: string;
    items: ItemKeyValue,
    onChange: (items: ItemKeyValue) => void
}

function GeneralEdit(props: IProps) {

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
            <TagInputBox key={itemKey} onClick={() => setFocusedId(itemKey)}>
                <TagInput id={itemKey} value={value} onChange={(e) => handleChange(e)} />
                {
                    focusedId === itemKey ? (
                        <EditButton onClick={() => handleDelete(itemKey)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </EditButton>
                    ) : null
                }
            </TagInputBox>
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
        <div>
            <Label>{props.title}</Label>
            <TagsContainer>
                {itemsToShow}
            </TagsContainer>
        </div>
    );
}

export default GeneralEdit;