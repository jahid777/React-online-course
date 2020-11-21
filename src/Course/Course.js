import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CourseItem from '../CourseItem/CourseItem';
import fakeData from '../fakeData/fakeData';

const Course = () => {
  const [course, setCourse] = useState([]);
  useEffect(()=>{
   setCourse(fakeData)                          
  },[]); 
  
  const [cart, setCart] = useState([]);

  const handleAddCourse = (item)=>{
  const newCart = [...cart, item]
  setCart(newCart);
  
//      console.log("this is clicked", item); 
}




return (

  <div className="main-container">

 <div className="row course-container">
   {
   course.map(singleCourse => <CourseItem singleCourse={singleCourse} handleAddCourse={handleAddCourse} key={singleCourse.id}> </CourseItem> )                       
   }
  </div>

   <div className="cart-container">
    <Cart cart={cart}></Cart>
   </div> 

</div>
);
};

export default Course;