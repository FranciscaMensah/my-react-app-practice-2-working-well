import React from 'react';
import {functions} from '../../functions';
import './Editor.css';
import Tabs from '../tabs/Tabs';
import Write from '../write/Write';
import Preview from '../preview/Preview';

export default function Editor(){
    const [isPreview, setIsPreview] = React.useState(false);
    const [markdown, setMarkDown] = React.useState('Type here');

    function handleChange (event){
        const html = event.target.value;
        setMarkDown(html);
        console.log(markdown)
    }

    function toggleWrite(){
        setIsPreview(prevState => false);
    }

    function togglePreview (event){
        setIsPreview(prevState => true);
    }

    const edit = {
        makeBold(){
            const selectedText = functions.getSelectedText();
            const currentMarkdown = markdown;
            console.log(currentMarkdown)
            const boldText = '**'+ selectedText +'**';
            const newMarkdown = currentMarkdown.replace(selectedText, boldText);
            setMarkDown(newMarkdown);
            console.log(boldText);
        },

        makeItalic(){
            // const selectedText = functions.getSelectedText();
            const currentMarkdown = markdown;
            console.log(currentMarkdown)
            // const italicText = '_'+ selectedText +'_';
            // const newMarkdown = currentMarkdown.replace(selectedText, italicText);
            const newMarkdown = currentMarkdown.replace(window.getSelection(), `_${window.getSelection()}_`)
            setMarkDown(newMarkdown);
            // console.log(italicText);
            console.log(newMarkdown);
        },

        makeMeBold(){
            const currentMarkdown = markdown;
            console.log(currentMarkdown);
            const selection = window.getSelection();
            const selectedText = selection.toString();
            const start = selection.anchorOffset;
            const end = selection.focusOffset - 1;
            console.log(currentMarkdown[start]);
            console.log(currentMarkdown[end]);

            const boldText = ' **'+ selectedText.trim() +'** ';
            // const updatedMarkdown = currentMarkdown;
            // const updatedMarkdown = currentMarkdown.slice(start, bold)
            // const updatedMarkdown = currentMarkdown.slice(start, selectedText.length, boldText);
            // console.log(updatedMarkdown);

            const str = currentMarkdown;
            const str1 = str.substring(0, start).trim();
            const str2 = str.substring(end + 1).trim()
            // const str2 = end + 1 !== null? str.substring(end + 1) : str.substring(end);
            console.log(str1)
            console.log(str2)

            const newString = str1 + boldText + str2;
            console.log(newString)
            setMarkDown(newString);
            console.log(markdown);
        }
    };

    return (
        <div className='editor'>
            <Tabs
                isPreview={isPreview}
                togglePreview={togglePreview}
                toggleWrite={toggleWrite}
            />
            {isPreview
            ?
            <Preview
                markdown={markdown}/>
            :
            <Write
                markdown={markdown}
                handleChange={handleChange}
                edit={edit}
            />
            }
            <button onClick={functions.getText}>Save note</button>
        </div>
    )
}