import { useState } from "react";

const Cell = ({ filled, onClick,isDisabled,label }) => {
  return (
    <button
      className={filled ? "cell cell-activated" : "cell"}
      aria-label={label}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    />
  );
};

const GridBox = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  
  const deactivateCells = () => {
      setIsDeactivating(true);
      const timer = setInterval(() => {
          setOrder((origOrder) => {
              const newOrder = origOrder.slice();
              newOrder.pop();
              
              if (newOrder.length === 0) {
                  clearInterval(timer);
                  setIsDeactivating(false);
        }
        
        return newOrder;
    });
}, 300);
};

const activateCells = (index) => {
  const newOrder = [...order, index];
  setOrder(newOrder);
  if (newOrder.length===config.flat(1).filter(Boolean).length) {
    deactivateCells();
  }
};

  return (
    <div className="wrapper mt-16">
      <div
        className="box bg-slate-100"
        style={{ gridTemplateColumns: `repeat(${config.length},1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
              label={`Cell ${index}`}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
};

export default GridBox;
