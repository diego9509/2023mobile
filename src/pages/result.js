import { useNavigate, useLocation } from "react-router-dom";

import CorrectImg from "../img/img_correct.svg";
import InCorrectImg from "../img/img_incorrect.svg";
import FinalImg from "../img/img_final.svg";

export default function Result() {

  const navigate = useNavigate();
  const location = useLocation();
  const answer = { ...location.state };

  return (
    <div className="main result flex column between">
      {answer.result === "true" ?
      <>
        <Correct />
        <button onClick={() => {navigate('/final')}}>응모하기</button>
      </> :
      <>
        <InCorrect />
        <button onClick={() => {navigate('/quiz')}}>돌아가기</button>
      </>
      }
    </div>
  );
}

function Correct(){
  return (
    <div>
      <img src={CorrectImg} alt="" />
      <h3>문제를 모두 맞추셨습니다</h3>
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="휴대폰 번호" />
      <label>
        <input type="checkbox" />개인정보 활용 동의
      </label>
      <p>본 이벤트에 참여하신 관람객 중 이벤트에 당첨되신 분들에 한하여 경품 발송을 위해 일부 개인정보를 행사 대행업체에 제공예정입니다.</p>
      <hr />
      <ul>
        <li>제공업체 : (주)두솜파트너스</li>
        <li>제공목적 : 경품발송</li>
        <li>제공항목 : 이름, 휴대폰번호</li>
        <li>보유기간 : 행사 종료 후 30일 내 파기</li>
      </ul>
      <hr />
    </div>
  )
}

function InCorrect(){
  return (
    <div className="incorrect">
      <img src={InCorrectImg} alt="" />
      <div><span>4</span>/5</div>
      <h3>아쉽지만 문제를<br />틀리셨어요</h3>
      <div>다시 도전해주세요</div>
    </div>
  )
}