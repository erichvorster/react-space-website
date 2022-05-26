import { fromJSON } from "postcss";
import React,{useState} from "react";
import { IconContext } from "react-icons";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"

const Accordion = ({data}) => {
const [clicked, setClicked] = useState(false)

const toggle = (index) => {
    if(clicked === index) {
        //If clicked is active close it 
        return setClicked(null)
    }
    setClicked(index)
}

  return (
    <div className="accordion-section flex flex-col items-center justify-center relative bg-white ">
        <div className="accordion-container w-full">
        {data.map((data,index) =>  {
             return (
              <>
                  <div onClick={() => toggle(index)} key={index} className="wrap text-white flex justify-between items-center w-full  border-black border-b">
                      <div className="flex items-center">
                      <h1 className="py-4 text-md font-bold text-black">{data.mission_name}</h1>
                      <img className="h-6 px-4"src={data.links.mission_patch}/>
                      </div>
                     <span className="text-black">{clicked === index ? <AiOutlinePlusCircle/> : <AiOutlineMinusCircle/>}</span>
                  </div>
                  <div className="dropDown bg-dark text-black flex justify-between ">
                      {clicked === index ? (
                    <>
                    <div className="w-9/12 ">
                     <p className="py-1 ">{data.flight_number}</p>
                     <p className="py-1 ">{data.details}</p>
                    </div>
                    <img className="w-44 p-8" src={data.links.mission_patch} />
                    </>     
                      ) : null}
                  </div>
              </>
               )
            })}
        </div>
    </div>
   
  )
}

export default Accordion
