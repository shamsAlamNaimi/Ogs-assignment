import React from 'react';
import {dataValues} from '../DataFiles/FilesDataValues.js'



const dvalues=dataValues;


class NavbarTop extends React.Component{
    render()
  {return (
    <div className="nav_bar_top">  
         <nav>
             <ul className='top_ul'>
             {this.props.cheK ? <div>
                <li onClick={()=>this.props.cahngevalue(this.props.pasid)}>{dvalues.articles[this.props.pasid].heading}</li>
                </div>:
                <div> 
             {dvalues.articles[this.props.passId].body.map((rows,id) =>(
              <li onClick={()=>this.props.sectionSelector(this.props.passId,id)}>{rows.section}</li>
               ))}
                </div> }
             </ul>
         </nav>
    </div>
  );
}}

export default NavbarTop;