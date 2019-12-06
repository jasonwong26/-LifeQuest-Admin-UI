import * as React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import { Container } from "../../containers/auth/Container";

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <header>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={"/"}>{title}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>

      <Container>
      {({user, loginUser, logOutUser}) => {
          const login = (e: React.MouseEvent<NavItem>) : void => {
            e.preventDefault();
            e.stopPropagation();

            if (loginUser) {
              loginUser();
            }
          };
          const logout = (e: React.MouseEvent<NavItem>) : void => {
            e.preventDefault();
            e.stopPropagation();

            if (logOutUser) {
              logOutUser();
            }
          };

          if(user.isAuthenticated) {
            const isAdmin = user.isAdmin;
            return (
              <React.Fragment>
                {isAdmin && (
                  <Nav>
                    <NavDropdown eventKey={3} title="Admin" id="admin-nav">
                      <LinkContainer to="/characters">
                        <MenuItem eventKey={3.1}>Characters</MenuItem>
                      </LinkContainer>
                      <LinkContainer to="/cutscenes">
                        <MenuItem eventKey={3.2}>Cutscenes</MenuItem>
                      </LinkContainer>
                      <LinkContainer to="/quests">
                        <MenuItem eventKey={3.3}>Quests</MenuItem>
                      </LinkContainer>
                      <LinkContainer to="/questlines">
                        <MenuItem eventKey={3.4}>Quest Lines</MenuItem>
                      </LinkContainer>
                      <MenuItem divider />
                      <LinkContainer to="/posts">
                        <MenuItem eventKey={3.5}>Blog Posts</MenuItem>
                      </LinkContainer>
                    </NavDropdown>
                  </Nav>
                )}

              <Nav pullRight>
                <LinkContainer to="/profile">
                  <NavItem eventKey={4}>Welcome {user.firstName}</NavItem>
                </LinkContainer>
                <NavItem eventKey={5} onClick={logout}>Log Out</NavItem>
              </Nav>
              </React.Fragment>
            );
          } else {
            return (
              <Nav pullRight>
                  <NavItem eventKey={6} onClick={login}>Log In</NavItem>
              </Nav>
            );
          }}}
      </Container>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
