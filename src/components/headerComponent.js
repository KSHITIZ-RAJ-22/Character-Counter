import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function Header() {
    return (
        <>
            <Navbar dark className='navbar bg-primary'>
                <div className="container">
                        <NavbarBrand href="/">
                            Character Counter
                        </NavbarBrand>
                </div>
            </Navbar>
        </>
    )
}
