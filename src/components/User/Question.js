import _ from 'lodash'

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }
    return (
        < >
            {data.image &&
                <div className='q-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`}></img>
                </div>
            }
            <div className='question'>Question {index}: {data.questionDescription} ?</div>
            <div className='answer'>
                {data.answers && data.answers.length && data.answers.map((a, index) => {
                    return (
                        <div key={`answer-${index}`} className='a-child'>
                            <div class="form-check">
                                <input class="form-check-input" type="" value="" id="flexCheckDefault" />
                                <label class="form-check-label" >
                                    {a.description}
                                </label >
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Question
