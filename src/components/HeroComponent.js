import React from 'react'
import HeroCardComponent from './HeroCardComponent';
import logoImage from '../logo.svg';

function HeroComponent() {

    return <>

        <div className="container my-5">
            <div className='row'>
                <div className='col-md-3'>
                    <HeroCardComponent productName="product name 1" productDescription="description text" productImage={logoImage}/>
                </div>

                <div className='col-md-3'>
                    <HeroCardComponent productName="product name 2" productDescription="description text" productImage={logoImage}/>
                </div>

                <div className='col-md-3'>
                    <HeroCardComponent productName="product name 3" productDescription="description text" productImage={logoImage}/>
                </div>

                <div className='col-md-3'>
                    <HeroCardComponent productName="product name 4" productDescription="description text" productImage={logoImage}/>
                </div>
            </div>

        </div>
    </>

}

export default HeroComponent;