import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css'
function Counter() {
  const [count1, setCount1] = useState(0);
  const limit1 = 18; // Set your limit here
  const [count2, setCount2] = useState(0);
  const limit2 = 100; // Set your limit here
  const [count3, setCount3] = useState(0);
  const limit3 = 50; // Set your limit here
  const [count4, setCount4] = useState(0);
  const limit4 = 15000; // Set your limit here

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      if (count1 < limit1) {
        setCount1(prevCount => prevCount + 1);
      } else {
        clearInterval(intervalId1); 
      }
    }, 200); 
    return () => clearInterval(intervalId1);
  }, [count1, limit1]);
  useEffect(() => {
    const intervalId2 = setInterval(() => {
      if (count2 < limit2) {
        setCount2(prevCount => prevCount + 1);
      } else {
        clearInterval(intervalId2); 
      }
    }, 30); 
    return () => clearInterval(intervalId2);
  }, [count2, limit2]);
  useEffect(() => {
    const intervalId3 = setInterval(() => {
      if (count3 < limit3) {
        setCount3(prevCount => prevCount + 1);
      } else {
        clearInterval(intervalId3); 
      }
    }, 50); 
    return () => clearInterval(intervalId3);
  }, [count3, limit3]);
  useEffect(() => {
    const intervalId4 = setInterval(() => {
      if (count4 < limit4) {
        setCount4(prevCount => prevCount + 100);
      } else {
        clearInterval(intervalId4); 
      }
    }, 20); 
    return () => clearInterval(intervalId4);
  }, [count4, limit4]);

  return (
    <div className={`${styles.counter}`}>
     <div className={`${styles.experience}`}>
      <h3
 className={`${styles.expHead}`}>
        {count1}
      </h3
>
       <p className={`${styles.expPara}`}>
       YEARS OF EXPERIENCED
        </p> 
     </div>
     <div className={`${styles.menu}`}>
      <h3
 className={`${styles.menuHead}`}>
      {count2}
      </h3
>
       <p className={`${styles.menuPara}`}>
       MENUS/DISH
        </p> 
     </div>
     <div className={`${styles.staff}`}>
      <h3
 className={`${styles.staffHead}`}>
      {count3}
      </h3
>
       <p className={`${styles.staffPara}`}>
       STAFFS
        </p> 
     </div>
     <div className={`${styles.customer}`}>
      <h3
 className={`${styles.customerHead}`}>
      {count4}
      </h3
>
       <p className={`${styles.customerPara}`}>
       HAPPY CUSTOMERS
        </p> 
     </div>
     <p className={`${styles.mainPara}`}>
     A small river named Duden flows by their place and supplies it with the necessary regelialia.
     </p>
    </div>
  );
}

export default Counter;
