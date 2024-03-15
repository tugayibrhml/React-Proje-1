import React, { Component } from 'react'
class Sum extends Component {
  render() {
    const x =5;
    const y = 10;
    const toplam = x+y;
    const css = {
        color:"aqua",
        fontSize:"80px",
        display:"inline",
        backgroundColor:"black",
        justFile:"content",
        borderRadius:"40px", pading:"20px"
    }
    const css1 = {
        css2:{backgroundColor:"red", color:"aqua", borderRadius:"50%"},
        css3:{backgroundColor:"aqua", color:"red", borderRadius:"50%"},
        css4:{backgroundColor:"red", color:"aqua", borderRadius:"50%"},
        
    }
    return (
        <div id='div' className='container bg-primary '>
      <div className='container ps-5'>
        <h2 style={css} ><span style={css1.css3}>X</span> <span style={css1.css4}>+</span> <span style={css1.css3}>Y</span> <span style={css1.css2}>=</span>  <span style={{color:"red", backgroundColor:"aqua", borderRadius:"50%"}}>{toplam}</span> </h2>
      </div>
        </div>
      
    )
  }
}
export default  Sum;
