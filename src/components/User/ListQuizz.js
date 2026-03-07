import React, { useEffect, useState } from 'react';
import './ListQuiz.scss';
import { getQuizzByUser } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
const ListQuizz = (props) => {
    const navigate = useNavigate();
    const [arrQuizz, setArrQuizz] = useState([]);
    useEffect(() => {
        getQuizData();
    }, []);
    const getQuizData = async () => {
        const res = await getQuizzByUser();
        console.log("API response:", res);
        if (res && res.EC === 0) {
            setArrQuizz(res.DT);
        }
    }

    return (
        <div className='list-quiz-container container'>
            {arrQuizz && arrQuizz.length > 0 &&
                arrQuizz.map((quiz, index) => {
                    console.log("quiz image:", quiz.image)
                    return (
                        <div div key={`${index}-quiz`} className="card" style={{ width: "18rem" }}>
                            <img src={`data:image/jpeg;base64,${quiz.image}`} className="card-img-top" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1}</h5>
                                <p className="card-text">{quiz.description}</p>
                                <button href="#" className="btn btn-primary"
                                    onClick={() => navigate(`/quiz/${quiz.id}`)}
                                >Start now</button>
                            </div>
                        </div>
                    )
                })
            }
            {
                arrQuizz && arrQuizz.length === 0 &&
                <div>you're don't have any quiz now ... </div>
            }
        </div >
    )
}

export default ListQuizz;
