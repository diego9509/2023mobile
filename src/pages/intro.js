import { useNavigate } from 'react-router-dom'

function Intro() {

    const navigate = useNavigate();

    return (
        <div className="intro">
            <h2>평생학습 모의고사</h2>
            <button onClick={() => navigate('/quiz')}>계속</button>
        </div>
    );
}

export default Intro;
