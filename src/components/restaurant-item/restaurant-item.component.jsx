import React from 'react';
import './restaurant-item.style.scss';

const RestaurantItem = ({ restaurantInfo }) => {
    const { address, logo, title, countReview, rate, coupon_count, description } = restaurantInfo;
    const MAX_LENGTH = 30;
    const newAddress = address.length > MAX_LENGTH ? address.substring(0, MAX_LENGTH) + '...' : address;
    return (
        <div className="restauran-item">
            <div className="top">
                <div className="image-wrapper">
                    <img src={ logo } alt=""/>
                </div>
                <div className="info">
                    <div className="title">{ title }</div>
                    <div className="food-type">{description}</div>
                    <div className="address"> { newAddress } </div>
                </div>
            </div>
            <div className="bottom">
                { coupon_count ? <div className="coupen">کوپن</div> : <div></div> }
                <div className="extra-info">
                    <div className="comments">{ countReview } نظر</div>
                    <div className="rate">{rate}</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantItem;