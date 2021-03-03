import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeaf } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { AppRouteName } from "../routes/AppRouteName";
import { setTokenAuthorization } from "../helpers/authToken";

interface IProps {
  brand: string | undefined;
}

const Header: React.FC<IProps> = ({ brand }) => {
  const { user, setUser } = useAuth();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function showUser() {
    history.push(AppRouteName.SHOW_USER);
  }

  function signOut() {
    setTokenAuthorization(null);
    setUser(undefined);
  }

  return (
    <Navbar dark expand="md">
      <div className="container">
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faDeaf} className="mr-2" />
          {brand}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {user?.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={showUser}>My profile</DropdownItem>
                <DropdownItem disabled>Lock screen</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={signOut}>Sign out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
