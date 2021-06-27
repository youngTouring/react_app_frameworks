import { faCaretDown, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 100%;
    left: 0px;
    border: 1px solid #E8E8E8;
    background-color: white;
    padding: 5px 10px;
    border-radius: 4px;
    width: max-content;
    z-index: 10;
    
`;

const Title = styled.span`
    color: ${Color.gray};
    font-size: 0.9rem;
    padding: 4px 0;
`;

const ContentWrapper = styled.div`
    display: flex; 
    flex-direction: column;
`;

const ConditionRow = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    padding: 4px 0;
`;

const ConditionRowItem = styled.div`
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0 0 0 12px;

    svg, span {
        font-size: 1rem;
    }

    svg {
        margin: 0 0 0 8px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    input {
        padding: 4px;
    }
`;

const ConditionRowStart = styled(ConditionRowItem)`
    width: 80px;

    svg {
        margin: 0 8px 0 0;
    }
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 0 6px 12px;
`;

const DefaultFooterActionButton = styled(DefaultActionButton)`
    color: ${Color.blue};

    span {
        padding: 0 5px;
        font-weight: 900;
    }
`;

function Filters() {

    return (
        <DropdownWrapper>
           <Title>Rows are filtered by the following conditions from the top.</Title>
           <ContentWrapper>
                <ConditionRow>
                    <ConditionRowStart>
                        <DefaultActionButton>
                            <FontAwesomeIcon icon={faTimes}/>
                            <span>Where</span>
                        </DefaultActionButton>
                    </ConditionRowStart>
                    <ConditionRowItem>
                        <DefaultActionButton>
                            <span>Company</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </DefaultActionButton>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <DefaultActionButton>
                            <span>Contains</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </DefaultActionButton>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <input type="text" placeholder="Type..." disabled={true}/>
                    </ConditionRowItem>
                </ConditionRow>
                <ConditionRow>
                    <ConditionRowStart>
                        <DefaultActionButton>
                            <FontAwesomeIcon icon={faTimes}/>
                            <span>Where</span>
                        </DefaultActionButton>
                    </ConditionRowStart>
                    <ConditionRowItem>
                        <DefaultActionButton>
                            <span>Status</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </DefaultActionButton>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <DefaultActionButton>
                            <span>Is</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </DefaultActionButton>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <input type="text" placeholder="Type..." disabled={true}/>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <DefaultActionButton>
                            <span>In</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </DefaultActionButton>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <input type="text" placeholder="Entity..." disabled={true}/>
                    </ConditionRowItem>
                </ConditionRow>
                <ConditionRow>
                    <ConditionRowStart>
                        <DefaultActionButton>
                            <FontAwesomeIcon icon={faTimes}/>
                            <span>Where</span>
                        </DefaultActionButton>
                    </ConditionRowStart>
                    <ConditionRowItem>
                        <DefaultActionButton>
                            <span>Status</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </DefaultActionButton>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <DefaultActionButton>
                            <span>Ends before</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </DefaultActionButton>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <input type="text" placeholder="Date" disabled={true}/>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <DefaultActionButton>
                            <span>In</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </DefaultActionButton>
                    </ConditionRowItem>
                    <ConditionRowItem>
                        <input type="text" placeholder="Entity..." disabled={true}/>
                    </ConditionRowItem>
                </ConditionRow>
           </ContentWrapper>
           <Footer>
                <DefaultFooterActionButton>
                    <FontAwesomeIcon icon={faPlus}/>
                    <span>Add filter</span>
                </DefaultFooterActionButton>
                <DefaultFooterActionButton>
                    <span>choose property</span>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </DefaultFooterActionButton>
           </Footer>
        </DropdownWrapper>
    )
}

export default Filters;