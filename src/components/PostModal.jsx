import React, { useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode'

const PostModal = () => {
 const [isOpen,setIsOpen] = useState(false)
 const [address, setAddress] = useState("");
 const [crew, setCrew] = useState("")
 const handleComplete=(data)=> {
  // This function will be called when a user selects an address.
  // You can use `data` parameter to get the detailed address information.

  let fullAddress = data.address;
  let extraAddress = '';

  if (data.addressType === 'R') {
      if (data.bname !== '') {
          extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
  }

  console.log(fullAddress);  // print the full address
  // Add the selected address to the state
  setCrew({
    ...crew,
    address: fullAddress
  });
  setAddress(fullAddress);
}
const handleAddress = (e) => {
  setAddress(e.target.value);
  setCrew({...crew, address: e.target.value});
}
  return (
    <div className="postModals">
      <button onClick={()=>setIsOpen(true)}>Open Modal</button>
      <div className="modal">
        <div className="modalContents">
        <DaumPostcodeEmbed onComplete={handleComplete} />
        </div>
        <button onClick={()=>setIsOpen(false)}>Close Modal</button>
      </div>
    </div>
  )
}

export default PostModal