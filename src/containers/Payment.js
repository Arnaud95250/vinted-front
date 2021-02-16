import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    // Envoyer notre clé publique à l'API Stripe LE REACTEUR
    const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
    const location = useLocation();
    console.log(location)

    return (
        <Elements stripe={stripePromise}>
        <CheckoutForm 
            title={location.state.product_name}
            amount={location.state.product_price}
        /> {/*CheckForm contient le contenu qui permet d'afficher l'input visa et communiquer avec avec stripe */}
        </Elements>
    );
}
export default Payment;