import React from 'react'
import {IconGalleryAdd} from "@Assets/icons/Index";
import InputBase from '@/components/InputBase/InputBase';
import SimpleEditor from "@Components/HtmlEditor/SimpleEditor";
import './CreateQuestion.scss'


const TYPE_QUESTION = [
  {
    id: "short-answer",
    name: "Short answer"
  },
  {
    id: "long-answer",
    name: "Long answer"
  },
  {
    id: "multiple-choice",
    name: "Multiple choice"
  },
  {
    id: "checkbox",
    name: "Checkbox"
  },
  {
    id: "dropdown",
    name: "Dropdown"
  },
  {
    id: "linear-scale",
    name: "Linear scale"
  },
  {
    id: "file-upload",
    name: "File upload"
  },
  {
    id:"date",
    name: "Date"
  },
  {
    id: "time",
    name: "Time"
  }
]

const CreateQuestion = () => {
  return (
    <div className="create-form-question">
        <div className="top-question">
          <div className='left-title-question'>
            <SimpleEditor />
          </div>
          <div className='right-title-question'>
              <IconGalleryAdd />
              <InputBase listOption={TYPE_QUESTION} />
          </div>
        </div>    
    </div>
  )
}

export default CreateQuestion;
