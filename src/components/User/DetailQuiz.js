import React, { useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from '../../services/apiService';
import _ from 'lodash';
import './DetailQuiz.scss'
const DetailQuiz = () => {
    const location = useLocation()
    const params = useParams();
    const quizId = params.id;
    useEffect(() => {
        fetchQuestions()
    }, [quizId])
    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId)
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers);
                    })
                    return { quizId: key, answers, questionDescription, image }
                })
                .value();
            console.log(data);
        }
    }
    return (
        <div className='detail-quiz-container'>
            <div className='left-content'>
                <div className='title'>
                    Quiz {quizId}:   {location?.state.quizTitle}
                </div>
                <hr />
                <div className='center'>
                    <img />
                </div>
                <div className='question-content'>
                    <div className='question'>Question1: how are you doing?</div>
                    <div className='answer'>
                        <div className='a-child'>A. asdsad</div>
                        <div className='a-child'>A. asdsad</div>
                        <div className='a-child'>A. asdsad</div>
                    </div>

                </div>
                <div className='footer'>
                    <button className='btn btn-primary ml-3'>privious</button>
                    <button className='btn btn-secondary'>next</button>
                </div>
            </div>
            <div className='right-content'></div>
        </div>
    )
}

export default DetailQuiz
