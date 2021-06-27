import Fees from "./view/Fees";
import Header from "./view/Header";
import HeaderEdit from "./edit/HeaderEdit";
import Informations from "./view/Informations";
import InternalReviews from "./view/InternalReviews";
import Proposals from "./view/Proposals";
import Terms from "./view/Terms";
import Services from "./view/Services";
import General from "./view/General";
import { EditButton, SaveButton } from "../../../shared/styleHelpers/components/ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import GeneralEdit from "./edit/GeneralEdit";
import SpaceLine from "../../../shared/components/SpaceLine";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGlobalState } from "../../../redux/reducers";
import { setUserData } from "../../../redux/actions/UserDataAction";
import { Attachment, Information, ItemKeyValue } from "../../../entities/UserData";
import { useEffect } from "react";
import ServicesEdit from "./edit/ServicesEdit";
import TermsEdit from "./edit/TermsEdit";
import InformationsEdit from "./edit/InformationsEdit";
import ProposalsEdit from "./edit/ProposalsEdit";
import { GridRowsProp } from "@material-ui/data-grid";
import InternalReviewsEdit from "./edit/InternalReviewsEdit";
import FeesEdit from "./edit/FeesEdit";

const NavGeneralInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 24px;
`;

const ContentWrapper = styled.div`
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
`;

function Content() {
    const dispatch = useDispatch();
    const userData = useSelector((state: IGlobalState) => state.userData);
    //
    const [editModeProfileInformation, setEditModeProfileInformation] = useState(false);
    const [editMode, setEditMode] = useState(false);
    //
    const globalExpertises = useSelector((state: IGlobalState) => state.userData?.expertise)
    const globalAdmission = useSelector((state: IGlobalState) => state.userData?.admission)
    const globalCounties = useSelector((state: IGlobalState) => state.userData?.counties)
    const globalSpecialties = useSelector((state: IGlobalState) => state.userData?.specialties)
    const globalInformations = useSelector((state: IGlobalState) => state.userData?.informations)
    const globalServices = useSelector((state: IGlobalState) => state.userData?.services)
    const globalTerms = useSelector((state: IGlobalState) => state.userData?.terms)
    const globalProposals = useSelector((state: IGlobalState) => state.userData?.proposals)
    const globalInternalReviews = useSelector((state: IGlobalState) => state.userData?.internalReviews)
    const globalFees = useSelector((state: IGlobalState) => state.userData?.fees)

    const [expertises, setExpertises] = useState<ItemKeyValue>({});
    const [specialties, setSpecialties] = useState<ItemKeyValue>({});
    const [admissions, setAdmissions] = useState<ItemKeyValue>({});
    const [counties, setCounties] = useState<ItemKeyValue>({});
    const [informations, setInformations] = useState<Information>({});
    const [services, setServices] = useState<ItemKeyValue>({});
    const [terms, setTerms] = useState<Attachment>({});
    const [proposals, setProposals] = useState<GridRowsProp>([]);
    const [internalReviews, setInternalReviews] = useState<GridRowsProp>([]);
    const [fees, setFees] = useState<GridRowsProp>([]);

    //

    useEffect(() => {
        if (globalExpertises !== null && globalExpertises !== undefined) {
            setExpertises(globalExpertises);
        }
    }, [globalExpertises])

    useEffect(() => {
        if (globalAdmission !== null && globalAdmission !== undefined) {
            setAdmissions(globalAdmission);
        }
    }, [globalAdmission])

    useEffect(() => {
        if (globalCounties !== null && globalCounties !== undefined) {
            setCounties(globalCounties);
        }
    }, [globalCounties])

    useEffect(() => {
        if (globalSpecialties !== null && globalSpecialties !== undefined) {
            setSpecialties(globalSpecialties);
        }
    }, [globalSpecialties])

    useEffect(() => {
        if (globalInformations !== null && globalInformations !== undefined) {
            setInformations(globalInformations);
        }
    }, [globalInformations])

    useEffect(() => {
        if (globalServices !== null && globalServices !== undefined) {
            setServices(globalServices);
        }
    }, [globalServices])

    useEffect(() => {
        if (globalTerms !== null && globalTerms !== undefined) {
            setTerms(globalTerms);
        }
    }, [globalTerms])

    useEffect(() => {
        if (globalProposals !== null && globalProposals !== undefined) {
            setProposals(globalProposals);
        }
    }, [globalProposals])

    useEffect(() => {
        if (globalInternalReviews !== null && globalInternalReviews !== undefined) {
            setInternalReviews(globalInternalReviews);
        }
    }, [globalInternalReviews])

    useEffect(() => {
        if (globalFees !== null && globalFees !== undefined) {
            setFees(globalFees);
        }
    }, [globalFees])

    //

    const saveUserDataAndClose = () => {
        if (userData !== null) {
            dispatch(setUserData({
                expertise: expertises,
                specialties: specialties,
                admission: admissions,
                counties: counties,
                informations: informations,
                terms: terms,
                services: services,
                proposals: proposals,
                internalReviews: internalReviews,
                fees: fees,
            }));
        }

        setEditMode(false);
    }

    //

    return (
        <ContentWrapper>
            {
                editModeProfileInformation ? (
                    <HeaderEdit afterSave={() => setEditModeProfileInformation(false)} />
                ) : (
                    <Header setEditMode={() => setEditModeProfileInformation(true)} />
                )
            }
            <SpaceLine />
            {
                <NavGeneralInfo>
                    {
                        editMode
                            ? (
                                <>
                                    <SaveButton onClick={() => saveUserDataAndClose()}><FontAwesomeIcon icon={faSave} /></SaveButton>
                                    <SaveButton onClick={() => setEditMode(false)}><FontAwesomeIcon icon={faTimes} /></SaveButton>
                                </>
                            )
                            : <EditButton onClick={() => setEditMode(true)}><FontAwesomeIcon icon={faPen} /></EditButton>
                    }
                </NavGeneralInfo>

            }
            {
                editMode ? (
                    <>
                        <>
                            <GeneralEdit title="Expertise" items={expertises} onChange={setExpertises} />
                            <GeneralEdit title="Specialties" items={specialties} onChange={setSpecialties} />
                            <GeneralEdit title="Admission to practice law" items={admissions} onChange={setAdmissions} />
                            <GeneralEdit title="Counties" items={counties} onChange={setCounties} />
                        </>
                        <SpaceLine />
                        <InformationsEdit informations={informations} onChange={setInformations} />
                        <ServicesEdit items={services} onChange={setServices} />
                        <TermsEdit items={terms} onChange={setTerms} />
                        <SpaceLine />
                        <ProposalsEdit items={proposals} onChange={setProposals}/>
                        <SpaceLine />
                        <InternalReviewsEdit items={internalReviews} onChange={setInternalReviews} />
                        <SpaceLine />
                        <FeesEdit items={fees} onChange={setFees}/>
                    </>
                ) : (
                    <>
                        <General />
                        <SpaceLine />
                        <Informations />
                        <Services />
                        <Terms />
                        <SpaceLine />
                        <Proposals />
                        <SpaceLine />
                        <InternalReviews />
                        <SpaceLine />
                        <Fees />
                    </>
                )
            }
        </ContentWrapper>
    );
}

export default Content;
