import { useSelector } from "react-redux";
import styled from "styled-components";
import { IWorkspace } from "../../../entities/Workspace";
import { filter } from "../../../helpers/Filter";
import { IGlobalState } from "../../../redux/reducers";
import { Item, Image, Text, DropdownLink } from "../../../shared/styleHelpers/components/Dropdown/styles";

const ItemsContainer = styled.div`
    padding: 0 12px;
`;

interface IProps {
    filterText: string;
}

function Workspaces(props: IProps) {
    let items = useSelector((state: IGlobalState) => state.workspaces);
    if (items == null) {
        items = [];
    }

    const filteredItems = filter(items, 'title', props.filterText);

    return (
        <ItemsContainer>
            {
                filteredItems.map((item: IWorkspace, index) => (
                    <DropdownLink key={index} to={`/workspace/${item.id}`}>
                        <Item>
                            <Image src={item.image}/>
                            <Text>{item.title}</Text>
                        </Item>
                    </DropdownLink>
                ))
            }
        </ItemsContainer>
    );
}

export default Workspaces;