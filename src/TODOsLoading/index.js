import React from 'react';
import './TODOsLoading.css';
function  TODOsLoading() {
  //  const number = document.querySelector(".number");

  //  let counter = 0;
  //  setInterval(() =>{
  //    if(counter === 100){
  //      clearInterval();
  //    }else{
  //      counter+=100;
  //      number.textContent = counter + "%";
  //    }
  //  }, 20)
return(
  <div className='container'>
    <span className='Loading-completeIcon'></span>
    <span className='Loading-text'></span>
    <span className='Loading-deleteIcon'></span>
  </div>

  // <div className='contain'>
  //   <span className = 'TODOsLoading'></span> 
      
       {/* <div className='inner'></div>
  //       <div className='number'>0%</div>
  //       <div className='circle'>
  //         <div className='bar left'>
  //           <div className='progress'></div>
  //         </div>
  //         <div className='bar right'>
  //           <div className='progress'></div>
  //         </div>
  //     </div> */}
      // </div>  
    );
   }
  export { TODOsLoading };
