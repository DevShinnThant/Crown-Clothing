import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    alert("hit");
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <CardElement />
        <Button onSubmit={onSubmitHandler} buttonType={BUTTON_TYPES.inverted}>
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
