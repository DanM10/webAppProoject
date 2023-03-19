import {PropsCapsula} from "../interfaces";
import React, {useState} from "react";
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
                            <Navbar.Brand >
                                <div className={"fs-4"}>Bienvenido al sistema:</div>
                                <div className={"fs-5"}> {props.usuario.name}</div>
                                <div className={"fs-6"}>{props.usuario.email}</div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className={"ms-5"}>
                                <Nav className="me-auto">
                                    <Nav.Link href="/user">Home</Nav.Link>
                                    <Nav.Link href="#pricing">Reportes</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="/noticia">Noticias</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </header>
                {props.children}
                <footer>
                    <Container className={"text-center"}>
                        <hr />
                        <h3>Ecuador { props.usuario.location}</h3>
                        <p>Daniel Garrido</p>
                        <p>Daniela Romero</p>
                    </Container>
                </footer>
            </div>

        </>
    )
}