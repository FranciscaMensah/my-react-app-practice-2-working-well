import React from 'react';
import './EditorTools.css';
import {HiOutlineCode, HiLink} from 'react-icons/hi';
import {ImStrikethrough} from 'react-icons/im';
import {BsImageFill} from 'react-icons/bs';
import {RiDoubleQuotesR} from 'react-icons/ri';
import {FaBold, FaItalic, FaUnderline} from 'react-icons/fa';
import {BiHighlight} from 'react-icons/bi';
import {MdOutlineFormatListBulleted} from 'react-icons/md';
import {TbListCheck} from 'react-icons/tb';
import {AiOutlineOrderedList} from 'react-icons/ai';
import {RxTextAlignLeft, RxTextAlignCenter, RxTextAlignRight, RxTextAlignJustify} from 'react-icons/rx';

export default function EditorTools (props){
    return(
        <div className='editor-tools'>
            <div className='wrapper-1'>
                <button
                    className='btn-tool padding'>
                        <BiHighlight size='17'/>
                </button>
                <button
                    onClick={props.edit.makeMeBold}
                    className='btn-tool padding'>
                        <FaBold size='15'/>
                </button>
                <button
                onClick={props.edit.makeItalic}
                    className='btn-tool padding'>
                        <FaItalic size='15'/>
                </button>
                <button
                    className='btn-tool padding'>
                        <FaUnderline size='15'/>
                </button>
                <button
                    className='btn-tool padding'>
                        <ImStrikethrough size='15'/>
                </button>
                <button
                    className='btn-tool padding'>
                        <HiLink size='17'/>
                </button>
                <button
                    className='btn-tool padding'>
                        <RiDoubleQuotesR size='20'/>
                </button>
                <button
                    className='btn-tool padding'>
                        <HiOutlineCode size='20'/>
                </button>
                <button
                    className='btn-tool padding'>
                        <BsImageFill size='16'/>
                </button>
            </div>

            <div className='wrapper-1'>
                <div className='divider'></div>
                <button className='btn-tool'>
                    <MdOutlineFormatListBulleted size='24'/>
                </button>
                <button className='btn-tool'>
                    <TbListCheck size='24'/>
                </button>
                <button className='btn-tool'>
                    <AiOutlineOrderedList size='24'/>
                </button>
                <div className='divider'></div>
                <button className='btn-tool'>
                    <RxTextAlignLeft size='25'/>
                </button>
                <button className='btn-tool'>
                    <RxTextAlignCenter size='25'/>
                </button>
                <button className='btn-tool'>
                    <RxTextAlignRight size='25'/>
                </button>
                <button className='btn-tool'>
                    <RxTextAlignJustify size='25'/>
                </button>
            </div>
        </div>
    )
}