import React from 'react'
import { styled } from 'styled-components'

const CrewWriting = styled.div`
padding-left:5px;
width:430px;
 margin:0 auto;
 .header{display:flex;align-items:center;justify-content:space-between;width:100%;height:5%;}
 .crewForm{width:100%;height:100%;}
 .crewForm>.crewImage{width:100%;height:40%;display:flex;align-items:center;justify-content:flex-start;}
 .crewForm>.crewImage>.button>.inputFileBtn {padding: 5px 7px;
  background-color:rgb(0,149,246);border-radius: 4px;color: white;cursor: pointer;font-size:15px;}
  .crewForm>.crewImage>.button>input{display:none;}
  .crewForm>.crewImage>.imageUploadSize{width:70%;height:100%;object-fit:cover;}
  .crewForm>.crewImage>.imageUploadSize>img{width:100%;height:100%;object-fit:contain;}

  .crewForm strong{margin-right:10px;}
`

export default CrewWriting

