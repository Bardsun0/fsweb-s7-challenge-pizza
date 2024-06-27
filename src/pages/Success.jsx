import React from "react";

function Success({ orderData }) {
  if (!orderData) {
    return <div>Order data is missing</div>;
  }

  return (
    <div className="orderSuccess">
      <div className="orderSuccess-text">
        <h2>lezzetin yolda</h2>
        <h3>SİPARİŞ ALINDI</h3>
      </div>
      <div className="acıPizza">
        <p>Position Absolute Acı Pizza</p>
      </div>
      <section className="orderDetails">
        <ul>
          <li>Boyut: {orderData.pizzaSize}</li>
          <li>Hamur: {orderData.pizzaDough}</li>
          <li>Ek Malzemeler: {orderData.extraIngredients.join(", ")}</li>
        </ul>
        <div className="orderTotal">
          <p>Sipariş Toplamı</p>
          <p>Seçimler: {(orderData.extraIngredients.length * 5).toFixed(2)}₺</p>
          <p>Toplam: {orderData.totalPrice.toFixed(2)}₺</p>
        </div>
      </section>
    </div>
  );
}

export default Success;
