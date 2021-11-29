import React,{useEffect, useState} from "react";
import axios from "axios";

const Content=()=>{
    const [characters,setCharacters]=useState([])
    useEffect(()=>{
       axios('https://swapi.dev/api/people/')
           .then((res)=>{
            setCharacters(res.data.results)
           })
    },[])
    return (
        <section className='content'>
            <div className='container'>
                <div className='content__grid'>
                    {
                        characters.map((el)=>(
                            <div className='content__card'>
                                <div className='content__img'>
                                    <img src="https://wallpaper.dog/large/20345783.jpg"/>
                                </div>
                                <div className='content__info'>
                                    <h3 className='content__title'>{el.name}</h3>
                                    <p className='content__desc'>{el.gender}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Content