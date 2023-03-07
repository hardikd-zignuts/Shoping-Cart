import React from "react";
import { Navbar, Button, Badge, NavbarBrand } from "reactstrap";
import { useSelector } from "react-redux";

function AppBar({ setIsShow }) {
  const cartSize = useSelector((state) => state.cartSize);
  return (
    <>
      <div>
        <Navbar dark>
          <NavbarBrand className="nav-title ms-5" href="/">
            My Online Shopping Site{" "}
          </NavbarBrand>
          <Button
            onClick={() => setIsShow((prev) => !prev)}
            className="nav-btn me-5"
            color="light"
            outline
          >
            My Cart{" "}
            <Badge color="danger" fill="true">
              {cartSize}
            </Badge>
          </Button>
        </Navbar>
      </div>
    </>
  );
}

export default AppBar;
