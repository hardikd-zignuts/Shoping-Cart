import React from "react";
import { Navbar, Button, Badge, NavbarBrand } from "reactstrap";
// import { useSelector } from "react-redux";

function AppBar() {
  //   const cartSize = useSelector((state) => state.cartSize);
  return (
    <>
      <div>
        <Navbar dark>
          <NavbarBrand className="nav-title" href="/">My Online Shopping Site </NavbarBrand>
          <Button className="nav-btn" color="light" outline>
            My cart{" "}
            <Badge color="danger" fill="true">
              {/* {cartSize} */}
              10
            </Badge>
          </Button>
        </Navbar>
      </div>
    </>
  );
}

export default AppBar;
