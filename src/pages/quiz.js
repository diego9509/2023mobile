import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Quiz(){
  const quizText = "다음중 ㅇㅇㅇ으로 알맞은 것은? 질문의 길이가 너무 차이가 많이 나지 않게 해주시기 바랍니다";

  const questions = [
    {
      value: false,
      text: "오답"
    },
    {
      value: true,
      text: "정답"
    },
    {
      value: false,
      text: "오답"
    },
    {
      value: false,
      text: "오답"
    },
  ]

	const navigate = useNavigate();
	const [ selectedValue, setValue ] = useState('');
	
  const onChange = useCallback(e => {
      setValue(e.target.value);
    }
  );
	
	const onClick = () => {
    navigate("/result", {
      state: {
        result: selectedValue
      }
    })
	}
	
	return (
    <div className="main flex column between">
      <div>
        <h3>Q1.</h3>
        <p>{quizText}</p>
        <ol>
          {questions.map((question, idx) => 
            <li key={idx}>	
              <label>
                <input type="radio" name="name" value={question.value} onChange={onChange} />
                {question.text}
              </label>
            </li>
          )}
        </ol>
      </div>
      <div className="flex">
        <button onClick={onClick}>다음으로</button>
      </div>
    </div>
	)
}
