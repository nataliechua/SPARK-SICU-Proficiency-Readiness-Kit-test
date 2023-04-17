import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import "./NewFlashcard.css"
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { useAppState } from '../../overmind';


function NewFlashcard({flashcard}) {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState(300);

    return (
        <div className={`card ${flip ? 'flip' : ''}`} style={{ height: height }} onClick={() => setFlip(!flip)}>
            <div className="front">
                {flashcard.question}
            </div>
            <div className="back" style={{ whiteSpace: "pre-line" }}>
                {flashcard.answer}
            </div>
        </div>
    )
}

export default NewFlashcard
