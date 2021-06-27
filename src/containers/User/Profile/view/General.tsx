import { useSelector } from "react-redux";
import { ItemKeyValue } from "../../../../entities/UserData";
import { IGlobalState } from "../../../../redux/reducers";
import { Label, Tag, TagsContainer } from "../styles/CommonStyles";

function General() {

    const userData = useSelector((state: IGlobalState) => state.userData);

    const expertiseItems: JSX.Element[] = [];
    const expertises: ItemKeyValue = (userData?.expertise !== null && userData?.expertise !== undefined ? userData.expertise : {})
    for(let key in expertises) {
        let val = expertises[key];
        expertiseItems.push(<Tag key={key}>{val}</Tag>);
    }
    
    const specialtieItems: JSX.Element[] = [];
    const specialties: ItemKeyValue = (userData?.specialties !== null && userData?.specialties !== undefined ? userData.specialties : {})
    for(let key in specialties) {
        let val = specialties[key];
        specialtieItems.push(<Tag key={key}>{val}</Tag>);
    }
    
    const admissionItems: JSX.Element[] = [];
    const admissions: ItemKeyValue = (userData?.admission !== null && userData?.admission !== undefined ? userData.admission : {})
    for(let key in admissions) {
        let val = admissions[key];
        admissionItems.push(<Tag key={key}>{val}</Tag>);
    }
    
    const countieItems: JSX.Element[] = [];
    const counties: ItemKeyValue = (userData?.counties !== null && userData?.counties !== undefined ? userData.counties : {})
    for(let key in counties) {
        let val = counties[key];
        countieItems.push(<Tag key={key}>{val}</Tag>);
    }
    
    return (
        <div>
            <Label>Expertise</Label>
            <TagsContainer>{expertiseItems}</TagsContainer>
            <Label>Specialties</Label>
            <TagsContainer>{specialtieItems}</TagsContainer>
            <Label>Admission to practice law</Label>
            <TagsContainer>{admissionItems}</TagsContainer>
            <Label>Counties</Label>
            <TagsContainer>{countieItems}</TagsContainer>
        </div>
    );
}

export default General;
