import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Quiz(){

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
	
  const onChange = useCallback(
    (e) => {
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
    <>
      {questions.map((question, idx) => 
        <li key={idx}>	
          <label>
            <input type="radio" name="name" value={question.value} onChange={onChange} />
            {question.text}
          </label>
        </li>
      )}
    </>
	)
}
