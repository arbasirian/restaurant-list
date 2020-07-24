import React from 'react';
import './restaurant-item.style.scss';

const RestaurantItem = () => {
    return (
        <div className="restauran-item">
            <div className="top">
                <div className="image-wrapper">
                    <img src="https://static.snapp-food.com/media/cache/vendor_logo/uploads/images/vendors/logos/5ed2061d66dea.jpg" alt=""/>
                </div>
                <div className="info">
                    <div className="title">دیزی بار مزه بازار (پیروزی)</div>
                    <div className="food-type">ایرانی ,سنتی ,پیش غذا </div>
                    <div className="address">پیروزی، خیابان داوود آبادی، پلاک269
، دیزی بار مزه بازار (پیروزی)</div>
                </div>
            </div>
            <div className="bottom">
                <div className="coupen">کوپن</div>
                <div className="extra-info">
                    <div className="comments">36 نظر</div>
                    <div className="rate">4.9</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantItem;