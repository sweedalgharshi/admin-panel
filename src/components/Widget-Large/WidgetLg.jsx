import React from "react";
import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widget-large-btn " + type}>{type}</button>;
  };

  return (
    <div className="widget-large">
      <h3 className="widget-large-title">Latest Transactions</h3>
      <table className="widget-large-table">
        <tr className="widget-large-tr">
          <th className="widget-large-th">Customer</th>
          <th className="widget-large-th">Date</th>
          <th className="widget-large-th">Amount</th>
          <th className="widget-large-th">Status</th>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user-img"
              className="widget-large-img"
            />
            <span className="widget-large-name">Susan Carol</span>
          </td>
          <td className="widget-large-date">04 April 2023</td>
          <td className="widget-large-amt">$244.00</td>
          <td className="widget-large-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user-img"
              className="widget-large-img"
            />
            <span className="widget-large-name">Susan Carol</span>
          </td>
          <td className="widget-large-date">04 April 2023</td>
          <td className="widget-large-amt">$244.00</td>
          <td className="widget-large-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user-img"
              className="widget-large-img"
            />
            <span className="widget-large-name">Susan Carol</span>
          </td>
          <td className="widget-large-date">04 April 2023</td>
          <td className="widget-large-amt">$244.00</td>
          <td className="widget-large-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user-img"
              className="widget-large-img"
            />
            <span className="widget-large-name">Susan Carol</span>
          </td>
          <td className="widget-large-date">04 April 2023</td>
          <td className="widget-large-amt">$244.00</td>
          <td className="widget-large-status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
