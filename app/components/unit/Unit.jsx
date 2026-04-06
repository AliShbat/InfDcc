import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const Unit = () => {
  // بيانات تجريبية (يمكنك ربطها بـ API لاحقاً)
  const currencies = [
    { pair: "USD/EGP", rate: "48.50", change: "+0.25", up: true },
    { pair: "EUR/USD", rate: "1.08", change: "-0.02", up: false },
    { pair: "SAR/EGP", rate: "12.92", change: "+0.05", up: true },
    { pair: "Gold/USD", rate: "2,350", change: "+15.0", up: true },
    { pair: "BTC/USD", rate: "65,400", change: "-1,200", up: false },
  ];

  const tickerItems = [...currencies, ...currencies];

  return (
    <div className="ticker-container text-body shadow-sm mb-4 bg-body ">
      <div className="ticker-scroll">
        {tickerItems.map((item, index) => (
          <div key={index} className="ticker-item border-end px-4">
            <span className=" me-2">{item.pair}:</span>
            <span className="me-2">{item.rate}</span>
            <span className={item.up ? "rate-up" : "rate-down"}>
              {item.up ? <BsArrowUpShort /> : <BsArrowDownShort />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unit;
