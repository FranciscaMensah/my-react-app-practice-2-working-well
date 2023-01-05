import React from 'react';
import './Preview.css';
import Markdown from 'react-markdown';

export default function Preview (props){
    return(
        <div className='preview'>
             <Markdown
                children={props.markdown}
             />
        </div>
    )
}