import React, { useState } from 'react'



const Follower = ({ id,avatar, first_name,last_name,email }) => {

    const [showModal,setShowModal]= useState(false)
    const [editName,setEditName]= useState(first_name+last_name )
    const [editEmail,setEditEmail]= useState(email)
    // let name=editName
   

    const Edituser = (userID) =>{
        console.log(userID)
        setShowModal(true)
        

    }

    const Updateuser = () =>
    {
    first_name={editName}
    }

    const closeModal = ( ) =>
    {
        setShowModal(false)
    }

    const  Chooseuser = (e)=>{
        const value=e.target.value;
        console.log(value)
        if(value==='edit')
        {
            Edituser(id)
        }
        }
  return (
      
    <article className='user-container'>
        <div>
      <img src={avatar}  />
      <h4>{editName}</h4>
      </div>
      <div>
      <label for="user">Choose :</label>
  <select name="user" id="users" value=" " onChange={Chooseuser}>
    <option value="choose">choose</option>
    <option value="edit">Edit User</option>
    <option value="delete">Delete User</option>
    </select>
    </div>
    {showModal && <div className='modal-container'>
        <h4>name:{editName}</h4>
        <input
        type='text '
        className='form-input'
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
        <h4>email:${editEmail}</h4>
        <input
        type='text '
        className='form-input'
        value={editEmail}
        onChange={(e) => setEditEmail(e.target.value)}
      />
      <button className='save-btn prev-btn' onClick={Updateuser}>
              Save
            </button>
            <button className='save-btn prev-btn' onClick={closeModal} >
              Close
            </button>
        
        </div>}
      
    </article>
  )
}

export default Follower