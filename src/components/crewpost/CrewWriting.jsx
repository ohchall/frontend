import React from 'react'
import { styled } from 'styled-components'


const CrewWriting = styled.div`

width:100%;
 margin:0 auto;
 .header{display:flex;align-items:center;justify-content:space-between;width:100%;height:5%;}
 .crewForm{width:100%;height:100%;padding:6px 40px;}
 .crewForm>.crewImage{width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:#eeeeee;
  }

  .crewForm>.crewImage svg{font-size:1.6rem;color:#000000;margin-bottom:10px;}

  .crewForm>.crewImage>.button {display: flex; justify-content: center; align-items: center;
    flex-direction: column; width: 100%; height: 100%;}


 .crewForm>.crewImage>.button>.inputFileBtn {color:#999999;border-radius: 4px;cursor: pointer;font-size:13px;font-family:"Roboto", sans-serif;display:flex;flex-direction: column;align-items:center;justify-content:center;width:100%;height:100%;}
  .crewForm>.crewImage>.button>input{display:none;}
  .crewForm>.crewImage>.imageUploadSize{width:100%;height:100%;display: flex;align-items: center;justify-content: center;}
  .crewForm>.crewImage>.imageUploadSize>img{width:100%;height:100%;object-fit:cover;}

  .crewForm strong{width:13%;margin-right:10px;font-size:14px;font-weight:600;}
  .identicalStyle {
  border-bottom:1px solid #999999;
  display:flex;
  align-items: center;
  justify-content: center;
  padding:5px 0;
  width:100%;
   }

.identicalStyle > input {
  width:85%;
  border:none;
  outline:none;
 }

  
  .crewForm>.crewFormContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;}

  .crewForm>.crewFormContent>.title{border-bottom:1px solid #999999;}
  .crewForm>.crewFormContent>.title>input{width:100%;font-size:17px;}

  .crewForm>.crewFormContent>.date>div{width:85%; display: flex; align-items: center; justify-content: flex-start;}

  .crewForm>.crewFormContent>.date>div>.space{margin-right:10px;}
  .react-datepicker-wrapper{width:30%;}

  .crewForm>.crewFormContent>.weekends{display:flex;align-items:center;justify-content:space-between;width:100%;border-bottom: 1px solid #999999;font-size:14px;padding:5px 0;}
  .crewForm>.crewFormContent>.weekends>.days{width:85%;display:flex;}
  .react-datepicker-wrapper input{width:100%;border:none;outline:none;cursor:pointer;}
  .crewForm>.crewFormContent>.location{width:100%;}
  .crewForm>.crewFormContent>.location>.address{display:flex; width:100%;}
  .crewForm>.crewFormContent>.location>.address>input{width:100%;border:none;outline:none;}

  
  .crewForm>.crewFormContent>.category>div{display:flex;width:87%;}
  .crewForm>.crewFormContent>.category>div>select{width:35%;border:none;}
  .crewForm>.crewFormContent>.category>div>input{width:70%;border:none;}
 
  .crewForm>.crewFormContent>.totalmembers>div{    
    width: 87%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }


  .crewForm>.crewFormContent>.totalmembers>.numberChoice>input{width:100%;border: 1px solid #999999;border:none;}
  .crewForm>.crewFormContent>.totalmembers>div>.numberUpDown{position:absolute;top:0;right:10px;padding-top:2px;}
  
  .crewForm>.crewFormContent>.button{width: 100%; padding:10px 0;}
  .crewForm>.crewFormContent>.button>.submit{width:100%;background:#666666;color:#ffffff;font-size:16px;border:none;padding: 6px 0;border-radius: 5px 5px 5px 5px;}
`

export default CrewWriting

