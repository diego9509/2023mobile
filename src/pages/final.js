import { useNavigate, useLocation } from "react-router-dom";

import FinalImg from "../img/img_final.svg";

export default function Result() {

  return (
    <div className="main result flex column between">
      <Final />
    </div>
  );
}

function Final(){
  return (
    <>
      <div className="incorrect">
        <img src={FinalImg} alt="" />
        <h3>참여해주셔서<br/>감사합니다<br/>인포데스크에서 경품을<br/>받아가세요</h3>
      </div>
      <p>경품을 받으신 후에는<br />다시 도전할 수 없습니다</p>
    </>
  )
}