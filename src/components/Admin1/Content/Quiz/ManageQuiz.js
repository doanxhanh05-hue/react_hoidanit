import Select from 'react-select';
import './ManageQuiz.scss';
import { useState } from 'react';


const options = [
    { value: 'EASY', label: 'Chocolate' },
    { value: 'MEDIUM', label: 'Strawberry' },
    { value: 'HARD', label: 'Vanilla' },
];
const ManageQuiz = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('EASY')
    const [image, setImage] = useState(null)
    const handleChangeFile = (event) => {

    }
    return (
        <div className='quiz-container'>
            <div className='title'>
                Manage Quizzes
            </div>
            <hr />
            <div className='add-new'>
                <fieldset className='border rouded-3 p-3 '>
                    <legend className='float-none w-auto px-3'>ADD NEW QUIZZ</legend>
                    <div className="form-floating mb-3">
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            class="form-control"
                            placeholder='your quiz name' />
                        <label >NAme</label>
                    </div>
                    <div className="form-floating">
                        <input
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            type="password"
                            class="form-control"
                            placeholder='description' />
                        <label >Description</label>
                    </div>
                    <div className='my-3'>
                        <Select
                            value={type}
                            // onChange={this.handleChange}
                            options={options}
                            placeholder={'Quizz types'}
                        />
                    </div>
                    <div className='more-actions form-group'>
                        <label className='mb-1'>Upload image</label>
                        <input onChange={(event) => handleChangeFile(event)} type='file' className='form-control'></input>
                    </div>
                </fieldset>
            </div>
            <div className='list-detail'>

            </div>
        </div>
    )
}

export default ManageQuiz
