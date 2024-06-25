import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import "./OrderPizza.css";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";

const ingredientsList = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Mozarella",
  "Ananas",
  "Kabak",
];

function OrderPizza() {
  const [name, setName] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaDough, setPizzaDough] = useState("");
  const [extraIngredients, setExtraIngredients] = useState([]);
  const [orderNote, setOrderNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});
  const price = 85.5;
  const extraIngredientPrice = 5;
  const history = useHistory();

  const handleIngredientChange = (ingredient) => {
    setExtraIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : prev.length < 10
        ? [...prev, ingredient]
        : prev
    );
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name || name.length < 3)
      newErrors.name = "İsim en az 3 karakter olmalıdır.";
    if (!pizzaSize) newErrors.pizzaSize = "Lütfen pizza boyutunu seçin.";
    if (!pizzaDough) newErrors.pizzaDough = "Lütfen hamur kalınlığını seçin.";
    if (extraIngredients.length < 4 || extraIngredients.length > 10)
      newErrors.extraIngredients = "4 ila 10 malzeme seçmelisiniz.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTotalPrice = () => {
    return price + extraIngredients.length * extraIngredientPrice;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderData = {
      name,
      pizzaSize,
      pizzaDough,
      extraIngredients,
      orderNote,
      quantity,
      totalPrice: calculateTotalPrice() * quantity,
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderData
      );
      console.log("Sipariş Özeti:", response.data);
      history.push({
        pathname: "/success",
        state: { orderData }, // Pass the order data as state
      });
    } catch (error) {
      console.error("Sipariş başarısız:", error);
    }
  };

  return (
    <>
      <Form className="formContainer" onSubmit={handleSubmit}>
        <img src="./Assets/mile2-aseets/pictures/form-banner.png" />
        <h3>Position Absolute Acı Pizza</h3>
        <div className="rating-container">
          <div className="price">85.50₺</div>
          <div className="rating">
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>

        <p className="textInfo">
          Frontent Dev olarak hala position:absolute kullaniyorsan bu çok acı
          pizza tam sana göre. Pizza. domates, peynir ve genellikle çeşitli
          diger malzemelerle kaplanmış. daha sonra geleneksel olarak odun
          ateşinde bir firinda yüksek sicaklkta pişirilen, genellikle yuvarlak,
          düzieştirilmiş mayalı bugday bazlı hamurdan oluşan italyan kökenli
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>

          <div className="input-container">
            <h3>
              İsim <span style={{ color: "red" }}>*</span>
            </h3>
            {errors.name && <p className="error">{errors.name}</p>}
            <Input
              type="text"
              name="name"
              placeholder="İsminizi girin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="pizza-size-container">
            <div className="pizza-size-card">
              <h3>
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </h3>
              {errors.pizzaSize && <p className="error">{errors.pizzaSize}</p>}
              <div className="radio-group">
                <FormGroup>
                  <Input
                    className="custom-radio-input"
                    id="küçük"
                    type="radio"
                    name="pizzaSize"
                    value="Küçük"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <Label className="custom-radio-label" htmlFor="küçük">
                    S
                  </Label>
                </FormGroup>

                <FormGroup>
                  <Input
                    className="custom-radio-input"
                    id="orta"
                    type="radio"
                    name="pizzaSize"
                    value="Orta"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <Label className="custom-radio-label" htmlFor="orta">
                    M
                  </Label>
                </FormGroup>

                <FormGroup>
                  <Input
                    className="custom-radio-input"
                    id="büyük"
                    type="radio"
                    name="pizzaSize"
                    value="Büyük"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <Label className="custom-radio-label" htmlFor="büyük">
                    L
                  </Label>
                </FormGroup>
              </div>
            </div>

            <div className="pizza-dough-card">
              <h3>
                Hamur Seç<span style={{ color: "red" }}>*</span>
              </h3>
              {errors.pizzaDough && (
                <p className="error">{errors.pizzaDough}</p>
              )}
              <FormGroup>
                <Input
                  type="select"
                  name="pizzaHamur"
                  value={pizzaDough}
                  onChange={(e) => setPizzaDough(e.target.value)}
                >
                  <option value="" disabled>
                    -Hamur Kalınlığı Seç-
                  </option>
                  <option value="Klasik">Klasik Hamur</option>
                  <option value="ince">İnce Hamur</option>
                  <option value="Süpper İnce">Süpper İnce Hamur</option>
                </Input>
              </FormGroup>
            </div>
          </div>

          <div>
            <h3>Ek Malzemeler</h3>
            <p>4 ila 10 malzeme seçmelisiniz. 5₺</p>
            {errors.extraIngredients && (
              <p className="error">{errors.extraIngredients}</p>
            )}
          </div>

          <div className="malzemeler-container">
            {ingredientsList.map((ingredient) => (
              <FormGroup key={ingredient} check>
                <Label check>
                  <Input
                    type="checkbox"
                    onChange={() => handleIngredientChange(ingredient)}
                    checked={extraIngredients.includes(ingredient)}
                  />{" "}
                  {ingredient}
                </Label>
              </FormGroup>
            ))}
          </div>

          <div className="input-container">
            <h3>Sipariş Notu</h3>
            <Input
              type="textarea"
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              id="textArea"
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
            />
          </div>
          <hr />

          <div className="siparis-container">
            <div className="counter-button">
              <Button
                className="counter-button1"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="numberCounter">{quantity}</span>
              <Button
                className="counter-button2"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>

            <div className="siparis-toplam">
              <div className="price-container">
                <h3>Sipariş Toplamı</h3>
                <div className="fiyatlar grey">
                  <p>Seçimler</p>
                  <p>
                    {(extraIngredients.length * extraIngredientPrice).toFixed(
                      2
                    )}
                    ₺
                  </p>
                </div>
                <div className="fiyatlar red">
                  <p>Toplam</p>
                  <p>{(calculateTotalPrice() * quantity).toFixed(2)}₺</p>
                </div>
              </div>
              <Button type="submit" className="submit-button">
                Sipariş Ver
              </Button>
            </div>
          </div>
      </Form>
      <Footer />
    </>
  );
}

export default OrderPizza;
