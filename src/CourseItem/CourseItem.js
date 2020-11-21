import React from 'react';
import '../CourseItem/Course.css';


const CourseItem = (props) => {   
   const {title, image, price, rating} = props.singleCourse;   
//    console.log(props);                   
return (

 
   <div class="card-group card-design col-md-4">
    <div class="card"/>
    <img src={image} class="card-img-top image-design" alt="..."/>
    <div class="card-body">
     <h5 class="card-title">{title}</h5>
     <p class="card-text">{price}</p>
     <p class="card-text">{rating}</p>
    </div> 
    <div class="card-footer">
       <button onClick={()=>props.handleAddCourse(props.singleCourse)}>buy now</button>
    </div>                 
</div>

);
};

export default CourseItem;