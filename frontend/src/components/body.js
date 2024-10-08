import React, { useState, useEffect } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { generateRequest, parseResponse } from './../utils/handlerData'
import Post from './post';
import HotUser from './hotUser';

const PAGES = 100


const Body = () => {
    const [inputData, setInputData] = useState(new Map())
    const [data, setData] = useState(new Map())
    const [currentPage, setCurrentPage] = useState(1)
    const [coldUser, setcoldUser] = useState(true)
    // const [fpHash, setFpHash] = React.useState('');

    async function getFpHash() {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        return visitorId;
    }

    useEffect(() => {
        getFpHash()
        .then((fp) => {
            var payload = new Map(data);
            fetch(generateRequest(fp, payload))
            .then((response) => response.json())
            // .then((json) => {console.log(json)})
            .then((json) => setInputData(parseResponse(json)))
        })
        setData(new Map());
      }, [currentPage]);


    const submit = () => {
        let newData = new Map(data);
        inputData.forEach((value, key) => {
            if (newData.get(key) === undefined) {
                newData.set(key, null)
            }
        })

        setData(newData)
        if (currentPage === PAGES) {
            setcoldUser(false)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const click = (id, res) => {
        let newData = new Map(data);
        newData.set(id, res)
        setData(newData)
    };

    var listOfId = Array(0);
    console.log("inputData1", inputData)
    inputData.forEach((value, key) => listOfId.push(key))
    console.log("inputData2", inputData)
    if (coldUser) {
        return (
            <div>
                <div className='body'>
                    {listOfId.map((id) => (
                        <Post key={id} id={id} value={inputData.get(id)} 
                        clicked={data.get(id)} click={click} />
                    ))}
                </div>
                <div className='btn-submit-outer'>
                        <button className='btn btn-primary btn-submit-inner' onClick={submit}>
                            <p className='btn-submit-text'>Продолжить</p>
                        </button>
                </div>
            </div>
        )
    } 
    else {
        return (
            <HotUser/>
        )
    }
  }


export default Body;