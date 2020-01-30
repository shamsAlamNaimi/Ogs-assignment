import React from 'react';
import {dataValues} from '../DataFiles/FilesDataValues.js'



const dvalues=dataValues;



class MainContent extends React.Component{


    render(){
    {console.log("inside main body value is "+this.props.cheK)}
  return (
    <div className="main_body">
      <main>
          { this.props.cheK ?<p><h3>{dvalues.articles[this.props.pasid].body[this.props.colId].section}</h3>{dvalues.articles[this.props.pasid].body[this.props.colId].topic}</p>:<p>
            {dvalues.articles[this.props.passId].body.map((rows,id) =>(
              <p><h3>{rows.section}</h3>{rows.topic}</p>
         ))}
         </p>}
      </main>
    </div>
  );
}}

export default MainContent;