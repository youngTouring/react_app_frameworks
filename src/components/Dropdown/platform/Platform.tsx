import styled from "styled-components";
import { filter } from "../../../helpers/Filter";
import { Item, Image, Text } from "../../../shared/styleHelpers/components/Dropdown/styles";
import { DropdownLink } from "../../../shared/styleHelpers/components/Dropdown/styles";

const ItemsContainer = styled.div`
    padding: 0 12px;
`;

interface IProps {
    filterText: string;
}

function Platform(props: IProps) {
    const items = filter(getItems(), 'text', props.filterText);

    return (
        <ItemsContainer>
            {
                items.map(function(item, index) {
                    if (item.url === "#" || item.url === "") {
                        return (
                            <Item key={index}>
                                <item.ImageComponent />
                                <Text>{item.text}</Text>
                            </Item>
                        );
                    } else {
                        return (
                            <DropdownLink key={index} to={item.url}>
                                <Item>
                                    <item.ImageComponent />
                                    <Text>{item.text}</Text>
                                </Item>
                            </DropdownLink>
                        );
                    }
                })
            }
        </ItemsContainer>
    );
}

const getItems = () => {
    return [
        {
            url: "/",
            text: "Home",
            ImageComponent: () => <Image src="/img/icons/house2.svg" alt="home" />,
        },
        {
            url: "/publications",
            text: "Publications",
            ImageComponent: () => <Image src="/img/icons/publications.svg" alt="publications" />,
        },
        {
            url: "/people",
            text: "People",
            ImageComponent: () => <Image src="/img/icons/people.svg" alt="people" />,
        },
        {
            url: "/entities",
            text: "Entities",
            ImageComponent: () => <Image src="/img/icons/entities2.svg" alt="entities" />,
        },
        {
            url: "/administration",
            text: "Administration",
            ImageComponent: () => <Image src="/img/icons/administration.svg" alt="administration" />,
        },
    ];
}

export default Platform;