import React from "react";
import PageTitle from "@/components/common/PageTitle";
import OrderStatus from "./OrdersStatus";
import OrderToday from "./OrderToday";
import OrdersListTable from "./OrdersListTable";
function OrdersList() {
  return (
    <>
      <div
        style={{
          margin: "40px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <PageTitle
            title="Your Orders"
            subtitle="This is your order list data"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <OrderStatus option={"All Status"} />
            <OrderToday option={"Today"} />
          </div>
        </div>
      </div>
      <OrdersListTable/>
    </>
  );
}

export default OrdersList;
