import React from 'react';
import {functions} from '../../functions';
import './Editor.css';
import Tabs from '../tabs/Tabs';
import Write from '../write/Write';
import Preview from '../preview/Preview';

export default function Editor(){
    const [isPreview, setIsPreview] = React.useState(false);
    const [markdown, setMarkDown] = React.useState('To the farm we go');

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
        applyEdit(event){
            const currentMarkdown = markdown;
            const selection = window.getSelection();
            const selectedTextRaw = selection.toString();
            const selectedText = selectedTextRaw.trim();

            const operation = event.currentTarget.name;
            console.log(operation);
            // console.log(selection)

            let startMarker = '';
            let endMarker = '';

            switch (operation){
                case 'bold':
                    startMarker = '**';
                    endMarker = '**';
                    break;
                case 'italic':
                    startMarker = '_';
                    endMarker = '_';
                    break;
                default:
                    startMarker = '';
                    endMarker = '';
            }

            if(selectedText !== ""){
                const start = selection.anchorOffset;
                const end = selection.focusOffset - 1;

                const selectionStart = selectedText.substring(0, 2);
                const selectionEnd = selectedText.substring(selectedText.length - 2);

                const boldText = startMarker + selectedText + endMarker;
            
                const str = currentMarkdown;
                const str1 = str.substring(0, start);
                const str2 = str.substring(end + 1);

                const spaceBeforeSelection = selectedTextRaw[0] === ' ' ? ' ' : '';
                const spaceAfterSelection = selectedTextRaw[selectedTextRaw.length - 1] === ' '? ' ' : '';

                let newMarkdown = '';

                if (selectionStart === startMarker && selectionEnd === endMarker){
                    // alert(`Text is already ${operation}`);
                    console.log(selectionStart);
                    console.log(selectionEnd);

                    const unboldText = selectedText.replaceAll(startMarker, '');
                    console.log(unboldText);
                    newMarkdown = str1 + spaceBeforeSelection + unboldText.trim() + spaceAfterSelection + str2;
                }
                else{ 

                // const boldText = startMarker + selectedText + endMarker;
            
                // const str = currentMarkdown;
                // const str1 = str.substring(0, start);
                // const str2 = str.substring(end + 1);

                // const spaceBeforeSelection = selectedTextRaw[0] === ' ' ? ' ': '';
                // const spaceAfterSelection = selectedTextRaw[selectedTextRaw - 1] === ' '? ' ' : '';
                // console.log(str1[str1.length - 1])
            
                newMarkdown = str1 + spaceBeforeSelection + boldText + spaceAfterSelection + str2;
                console.log(newMarkdown);
                }

                setMarkDown(newMarkdown);
            }
            else{
                // alert(`Select something to make ${operation}`)
                return markdown;
            }
        },

        makeBold(){
            const currentMarkdown = markdown;
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();

            if(selectedText !== ""){
                const start = selection.anchorOffset;
                const end = selection.focusOffset - 1;

                const selectionStart = selectedText.substring(0, 2);
                const selectionEnd = selectedText.substring(selectedText.length - 2);

                if (selectionStart === "**" && selectionEnd === "**"){
                    console.log('text is already bold');
                    return;
                }

                const boldText = '**'+ selectedText +'**';
            
                const str = currentMarkdown;
                const str1 = str.substring(0, start);
                const str2 = str.substring(end + 1);
            
                const newMarkdown = str1 + " " + boldText + " " + str2;
                setMarkDown(newMarkdown);
                console.log(newMarkdown);
            }
            else{
                return markdown;
            }
        },

        makeItalic(){
            const currentMarkdown = markdown;
            const selection = window.getSelection();
            const selectedText = selection.toString();
           
            if(selectedText !== ""){
            const start = selection.anchorOffset;
            const end = selection.focusOffset - 1;

            const italicText = '*'+ selectedText.trim() +'*';
           
            const str = currentMarkdown;
            const str1 = str.substring(0, start).trim();
            const str2 = str.substring(end + 1).trim()
           
            const newMarkdown = str1 + italicText + str2;
            setMarkDown(newMarkdown);
            }
        },
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