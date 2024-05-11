import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Adminshow() {
  const [list, setlist] = useState([])
  const [reason, setreason] = useState('')
  const [show, setshow] = useState(false)
  const [showname,setshowname]=useState()

  useEffect(() => {
    axios.get('http://localhost:3007/User')
      .then(res => setlist(res.data))
  }, [list])

  const handleVerfiy = (e)=> {
    console.log(e)
    axios.put(`http://localhost:3007/Data/${e}`, {Status: "verified" })
      .then(res => console.log(res.data))
    
  }

  const handleReject = (e) => {
    setshow(true)
    // console.log(reason, e.id, e.name,);
    // axios.post('http://localhost:3006/Data', { id: e.id, name: e.name, location: e.location, price: e.price, img: e.img, Status: "rejeted" })
    //   .then(res => console.log(res.data))
    //   axios.delete('http://localhost:3007/User', { id: e.id, name: e.name, location: e.location, price: e.price, img: e.img})
    //   .then(res => console.log(res.data))
  }



  return (
    <div>
      <>
        <table>
          <thead>
            <tbody>
              {list.map((e) => {
                return (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.location}</td>
                    <td>{e.type}</td>
                    <td>{e.price}</td>
                    <td>{e.img}</td>
                    <button onClick={() => handleVerfiy(e.id)}>verfiy</button>
                    <button onClick={() => handleReject(e)}>Reject</button>
                    

                  </tr>

                )
              })}
            </tbody>
          </thead>
        </table>
      </>
                     {show && <div>
                        <button onClick={() => setshow(false)}>close</button>
                        <lable>Enter reason:</lable>
                        <input type='text' onChange={(e) => setreason(e.target.value)}></input>
                      </div>
                    }

    </div>
  )
}
