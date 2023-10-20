import { useNavigate } from 'react-router-dom'

import ImgTop from '../img/img_top.svg';
import ImgCenter from '../img/img_center.png';
import ImgBottom from '../img/img_bottom.svg';
import ImgTitle from '../img/img_title.svg';
import ImgLogo01 from '../img/logo_moe.svg';
import ImgLogo02 from '../img/logo_nile.svg';

function Intro() {

    const navigate = useNavigate();

    return (
        <div className="intro">
            <div className="bg">
                <img src={ImgTop} alt="" />
                <img src={ImgBottom} alt="" />
            </div>
            <div className="flex column">
                <img src={ImgTitle} alt="제 8회 대한민국 평생학습 박람회" />
                <img src={ImgCenter} alt="제 8회 대한민국 평생학습 박람회" />
                <h2>평생학습 모의고사</h2>
                <button onClick={() => navigate('/quiz')}>다음으로</button>
                <div className="flex evenly">
                    <img src={ImgLogo01} alt="교육부" />
                    <img src={ImgLogo02} alt="국가평생교육진흥원" />
                </div>
            </div>
        </div>
    );
}

export default Intro;
