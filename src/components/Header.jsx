import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const ACT_CLASS = "nav-item nav-link active bg-danger text-white item-link rounded";
    const NO_ACT_CLASS = "nav-item nav-link item-link";

    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm z-1">
            <Container>
                <Navbar.Brand>
                    <i className="fa-solid fa-location-crosshairs"></i>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? ACT_CLASS : NO_ACT_CLASS
                            }
                            to="/"
                        >
                            Inico
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? ACT_CLASS : NO_ACT_CLASS
                            }
                            to="/pokemons"
                        >
                            Pokemones
                        </NavLink>
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
