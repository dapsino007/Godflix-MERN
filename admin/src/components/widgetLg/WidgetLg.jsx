import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://image.shutterstock.com/image-photo/portrait-beautiful-african-american-woman-600w-1123160147.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Joy Smith</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$12.98</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$8.99</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://image.shutterstock.com/image-photo/mature-man-wearing-protective-face-600w-1943749630.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Rick Mason</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$8.99</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://image.shutterstock.com/image-photo/boyfriend-giving-piggyback-smiling-girlfriend-600w-1190246566.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Fey Wong</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$10.98</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
