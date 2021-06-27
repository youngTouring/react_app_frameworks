import { Link } from "react-router-dom";
import styled from "styled-components";

const FastNavWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
`;

const ImageHolder = styled.div`
  border-radius: 20px;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const FilledImageHolder = styled(ImageHolder)`
  background-color: #ececec;
  border: 1px solid #e8e8e8;
  position: relative;

  &::after {
    content: '3';
    position: absolute;
    top: -4px;
    right: -6px;
    background-color: #0ca1db;
    font-size: 0.8em;
    color: white;
    padding: 1px 5px;
    border-radius: 12px;
  }
`;

const FastNavImage = styled.img`
  height: max-content;
  width: max-content;
`;

function FastNav() {
  return (
    <FastNavWrapper>
      <Link to="/">
        <ImageHolder>
          <FastNavImage src="/img/icons/house.png" />
        </ImageHolder>
      </Link>
      <Link to="/user/comments">
        <FilledImageHolder>
          <FastNavImage src="/img/icons/comments.png" />
        </FilledImageHolder>
      </Link>
      <Link to="/user/notifications">
        <FilledImageHolder>
          <FastNavImage src="/img/icons/bell.png" />
        </FilledImageHolder>
      </Link>

    </FastNavWrapper>
  );
}

export default FastNav;
