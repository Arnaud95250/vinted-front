import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";


const CheckoutForm = ({title, amount}) => {
  const token = Cookies.get("userToken");
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: token,
      });

      const stripeToken = stripeResponse.token.id;
      const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/payment", {
        stripeToken: stripeToken,
        title: title,
        amount: amount
      });
      console.log(response.status);
      if (response.status === 200) {
        setSucceeded("Paiement validé !");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="check_form">
        {!succeeded ? (
        <form onSubmit={handleSubmit}>
          <p>{title}</p>
          <p>{amount} €</p>
          <CardElement />
          <button type="submit">Valider</button>
        </form>
      ) : (
        <span>Paiement validé !</span>
      )}
    </div>
  );
};

export default CheckoutForm;
