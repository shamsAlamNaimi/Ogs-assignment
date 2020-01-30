import React from 'react';
import {dataValues} from '../DataFiles/FilesDataValues.js';
import jQuery from 'jquery';



const dvalues=dataValues;

class NavbarLeft extends React.Component{
  
  rowselcted(y){
    jQuery("#"+y).toggle();
    
  }
   render()   
  {return (
    
    <div className="nav_bar_left">
      <main>
         <nav>
          <ul>
          {dataValues.articles.map((rows,id) =>(
            <li onClick={()=>this.rowselcted(rows.id)} ><a onClick={()=>this.props.cahngevalue(rows.id)}>{rows.heading}</a>
            <ul id={id}  style={{display:'none'}}>
              {rows.body.map((urows,uid) => (
                <div onClick={()=>this.rowselcted(rows.id)}>
              <li onClick={()=>this.props.sectionSelector(rows.id,uid)} style={{textAlign:"center",marginLeft:"4px",color:"#ff0080"}}>{urows.section}</li>
              </div>
              ))}
            </ul>
            
            </li>
            
          ))}
          </ul>
           </nav>
      </main>
    </div>
  );
}

}

export default NavbarLeft;