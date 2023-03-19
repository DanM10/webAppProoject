import {PropsCapsula} from "../interfaces";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import {useForm} from "react-hook-form";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function (props:PropsCapsula){


    return(
        <>
            <div>
                <Head>
                    <title>{props.title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <header>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Bienvenido al sistema: {props.usuarioNombre}</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#features">Home</Nav.Link>
                                    <Nav.Link href="#pricing">Reportes</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#deets">Noticias</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {props.usuarioNombre}
                </header>
                {props.children}
                <footer>
                    <Container className={"text-center"}>
                        <hr />
                        <h3>Ecuador-Quito</h3>
                        <p>Daniel Garrido</p>
                        <p>Daniela Romero</p>
                    </Container>
                </footer>
            </div>

        </>
    )
}