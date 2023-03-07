import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  Badge,
} from "reactstrap";
import { addToCart } from "../../redux/actions/cartAction";

const ShopItem = ({ id, price, title, description }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card className="m-2">
        <CardBody>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <CardTitle className="mb-4 fw-bold" tag="h5">
                {title}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {description}
              </CardSubtitle>
            </div>
            <div className="d-flex align-items-center justify-content-between me-4">
              <Badge id="price-badge" className="fs-6 fw-normal">
                ${price}.00
              </Badge>
            </div>
          </div>

          <div className="d-flex mt-4 align-items-center justify-content-end">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    itemBasePrice: price,
                    itemTitle: title,
                    itemQuantity: 1,
                    itemPrice: price,
                  })
                )
              }
              color="primary"
              outline
              className="mx-3"
            >
              Add to Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ShopItem;
