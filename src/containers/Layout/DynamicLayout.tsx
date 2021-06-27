import { useSelector } from "react-redux";
import { Layout } from "../../helpers/Layout";
import { IGlobalState } from "../../redux/reducers";
import FullScreenLayout from "./FullScreenLayout";
import MainLayout from "./MainLayout";

interface IProps {
  children: JSX.Element;
}

const DynamicLayout = ({ children }: IProps) => {
  const currentLayout = useSelector((state: IGlobalState) => state.layout);

  switch (currentLayout) {
    case Layout.FULL_SCREEN: return <FullScreenLayout>{children}</FullScreenLayout>
    default:
      return <MainLayout>{children}</MainLayout>
  }
}

export default DynamicLayout;
