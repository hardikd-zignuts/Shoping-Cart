import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";

const CartItem = ({
  id,
  itemQuantity,
  itemPrice,
  itemBasePrice,
  itemTitle,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card className="my-2 border-0">
        <CardBody id="cardBody">
          <div className="d-flex align-items-center justify-content-between">
            <CardTitle tag="h3">{itemTitle}</CardTitle>
            <div className="d-flex align-items-center justify-content-between">
              <CardText className="fs-4 fw-bold pe-2">
                ${itemPrice * itemQuantity}.00
              </CardText>
              <CardSubtitle className="mb-2 text-light fst-italic" tag="h6">
                (${itemBasePrice}.00/item)
              </CardSubtitle>
            </div>
          </div>

          <div className="d-flex mt-4 align-items-center justify-content-between">
            <CardText className="fw-bold">×{itemQuantity}</CardText>
            <div>
              <Button
                onClick={() => dispatch(removeFromCart({ id }))}
                color="light"
                className="mx-3"
                outline={true}
              >
                -
              </Button>
              <Button
                onClick={() => dispatch(addToCart({ id }))}
                color="light"
                className="mx-3"
                outline={true}
              >
                +
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CartItem;
