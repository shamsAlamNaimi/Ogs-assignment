import React from 'react';
import NavbarTop from './NavbarTop.js';
import NavbarLeft from './NavbarLeft.js';
import MainContent from './MainContent.js';
import Email from './Email.js';
import '../styleSheet/Wrapper.css'

let flag;


class Wrapper extends React.Component{
  constructor(props) {  
    super(props);  
    this.state = {
        passageId : 0 ,
        coloumId: 0,
        checkFlag: false,
        pasid:0,
    };
    this.changeValue=this.changeValue.bind(this)
    this.sectionSector=this.sectionSector.bind(this)
} 




changeValue=(x)=>{
  console.log("the value is changing")
  this.setState({
    passageId:x,
    checkFlag:false,
  })
}


sectionSector=(x,y)=>{
  console.log("this is section selector of Wrapper")
  this.setState({
    pasid:x,
    coloumId:y,
    checkFlag:true
  })
  console.log("inside Wrapper value is changing"+this.state.checkFlag);
}

    render()
  {
{    console.log("inside wrapper"+this.state.checkFlag)
}    
    return (
    <body>
    <div className="wrapper">
            <header><h1>Application for OGS </h1></header>
          <NavbarTop passId={this.state.passageId} colId={this.state.coloumId} cheK={this.state.checkFlag} pasid={this.state.pasid} cahngevalue= {this.changeValue} sectionSelector={this.sectionSector} ></NavbarTop>
          <NavbarLeft cahngevalue= {this.changeValue} sectionSelector={this.sectionSector} ></NavbarLeft>
          <MainContent passId={this.state.passageId} colId={this.state.coloumId} cheK={this.state.checkFlag} pasid={this.state.pasid} ></MainContent>
          <footer> Copyright &copy; 2020 Shams Alam Naimi
            <Email></Email>
            </footer>
        
    </div>
    </body>
  );
}}

export default Wrapper;