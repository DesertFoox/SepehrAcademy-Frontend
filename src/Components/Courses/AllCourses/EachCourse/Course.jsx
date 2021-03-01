import React, { Component } from 'react'
import det from '../css/det.module.css';
class Course extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <React.Fragment>
                       <div className={det["items"]}>
                        <div className={det["picholder"]}></div>
                        <div className={det["sign-btn"]}>
                            <button>ثبت نام</button>
                        </div>
                        <div className={det["description"]}>
                            <h2>ریکت مقدماتی تا پیشرفته</h2>
                            <p>مدرس</p>
                            <span className={det["mentor"]}>آرمین ساکت</span>
                            <br />
                            <span className={det["price"]}>10,000</span> <span>تومان</span>
                            <br />
                            <span className={det["rate"]}>4.6</span>
                        </div>

                    </div>
            </React.Fragment>
         );
    }
}
 
export default Course;