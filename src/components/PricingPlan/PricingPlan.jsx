import React, { useState } from 'react';
import pricingData from './data.js';
import classes from './PricingPlans.module.scss';

export default function PricingPlan() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price) => {
    const discounted = isYearly ? price * 0.88 : price;
    return `$${discounted.toFixed(0)}`;
  };

  return (
    <section className={classes.pricingSection}>
      <h2 className={classes.title}>Flexible pricing plans</h2>

      <div className={classes.toggle}>
        <button
          className={!isYearly ? classes.active : ''}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button
          className={isYearly ? classes.active : ''}
          onClick={() => setIsYearly(true)}
        >
          Yearly <span>-12% Off</span>
        </button>
      </div>

      <div className={classes.cards} key={isYearly ? 'yearly' : 'monthly'}>
        {pricingData.map((plan, index) => (
          <div
            className={`${classes.card} ${
              plan.title === 'Optimal' ? classes.highlight : ''
            }`}
            key={index}
          >
            <h3>{plan.title}</h3>
            <p className={classes.price}>
              {formatPrice(plan.price)}
              <span>/mon</span>
            </p>
            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx} className={classes.included}>
                  <span className={classes.icon}>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9708 3.52827C15.2311 3.78862 15.2311 4.21073 14.9708 4.47108L6.97075 12.4711C6.7104 12.7314 6.28829 12.7314 6.02794 12.4711L2.02794 8.47108C1.76759 8.21073 1.76759 7.78862 2.02794 7.52827C2.28829 7.26792 2.7104 7.26792 2.97075 7.52827L6.49935 11.0569L14.0279 3.52827C14.2883 3.26792 14.7104 3.26792 14.9708 3.52827Z" fill="#03CEA4"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
              {plan.missing.map((f, idx) => (
                <li key={idx} className={classes.excluded}>
                  <span className={classes.icon}>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.36128 2.86225C3.62163 2.6019 4.04374 2.6019 4.30409 2.86225L8.49934 7.05751L12.6946 2.86225C12.955 2.6019 13.3771 2.60191 13.6374 2.86225C13.8978 3.1226 13.8978 3.54471 13.6374 3.80506L9.44215 8.00032L13.6374 12.1956C13.8978 12.4559 13.8978 12.878 13.6374 13.1384C13.3771 13.3987 12.955 13.3987 12.6946 13.1384L8.49934 8.94313L4.30409 13.1384C4.04374 13.3987 3.62163 13.3987 3.36128 13.1384C3.10093 12.878 3.10093 12.4559 3.36128 12.1956L7.55654 8.00032L3.36128 3.80506C3.10093 3.54471 3.10093 3.1226 3.36128 2.86225Z" fill="#9A9CA5"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={classes.choose}>Choose plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}
