import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react'

const QuoteBox = () => {
    
    const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871']
    
    const num = Math.floor(Math.random() * colors.length)
    const numRandom = Math.floor(Math.random() * quotes.length)
    
    const [ind, setInd] = useState(num)
    const [index, setIndex] = useState(numRandom)

    const change = () => {
        setIndex(numRandom)
        setInd(num)
    }
    document.body.style = `background-color: ${colors[ind]}`
    return (
        <div className='card'>
            <p style={{ color: colors[ind] }}><i class="fa-solid fa-quote-left"></i><span>{quotes[index].quote}</span>
            </p>
            <p style={{ color: colors[ind] }}>{quotes[index].author}</p>
            <div>
                <button onClick={change} style={{ backgroundColor: colors[ind] }}><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    );
};

export default QuoteBox;