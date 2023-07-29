import React from 'react'

const MenuCard = ({menuData}) => {
  return (
        <>
        <section className="main-card--container">           
        {menuData.map((curElem) => {
            const {id,name,category,image,description} = curElem;
                return(
                    <>
                    <div className="card-container" key ={id}>
            <div className='card'>
                <div className='card-body'>
                    <spam className='card-number card-circle subtle'>{id}</spam>
                    <span className='card-author subtle'>{name}</span>
                    <h1 className="card_title">{name} </h1>
                    <span className='card-description subtle'>
                        I love Maggi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magnam, est dolore distinctio quibusdam optio id nemo laborum at odio! Debitis, beatae. Ut et maiores praesentium? Nam tempore excepturi quos.
                    </span>
                    <div className='card-read'>Read</div>
                </div>
                <img src ={curElem.image} alt="images" className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>  
        </>      
                );
            })}       
        </section>
        </>
  );
};
export default MenuCard
