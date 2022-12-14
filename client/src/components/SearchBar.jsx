import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getDogName } from '../redux/actions/index.js'
import { useHistory } from "react-router-dom";
import "./styles/SearchBar.css"

export default function SearchBar ({paginado}) {
    const dispatch = useDispatch();
    const [searchDog, setSearchDog] = useState('')
    const history = useHistory();
    

    const handleInput = (e) => {
        e.preventDefault()
        setSearchDog(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchDog)
        dispatch(getDogName(searchDog))
        setSearchDog('')
        history.push('/home')
        paginado(1)
    }

    return (
        <div>
            <div>
                <input className='input1' type="text" onChange={e => handleInput(e)} value={searchDog} placeholder="Search..."/>
                <button className='btn' type="submit" onClick={e => handleSubmit(e)}>Look for</button>
            </div>
        </div>
    )
}