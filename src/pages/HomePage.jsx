import React, { useState } from "react";
import SideBar from "../components/SideBar";
import MakeProject from "../components/MakeProject";
import ContentWrapper from "../components/ContentWrapper";
import NoProjectScreen from "../components/NoProjectScreen";
import ProjectDetails from "../components/ProjectDetails";

export default function HomePage() {
    const [viewProject, setViewProject] = useState(false);
    // const [viewProject, setViewProject] = useState();
    


  return (
    <ContentWrapper>
        <div className="flex">
            <SideBar viewProject={viewProject} setViewProject={setViewProject} />
            {viewProject ? <MakeProject setViewProject={setViewProject}/>  :  <NoProjectScreen setViewProject={setViewProject}/> }
           
            
            
            
        </div>
     
    </ContentWrapper>
  );
}
