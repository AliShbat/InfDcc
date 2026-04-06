"use client"; // ضروري إذا كنت تستخدم App Router في Next.js 13+

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const navbar = () => {
  return (
    <Navbar dir="rtl"  collapseOnSelect expand="lg"  className="sticky-top bg-body" >
      <Container>
       
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>غرفة تجارة دمشق</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="آخر الأخبار" id="collasible">
              <NavDropdown.Item href="#action/3.1">
                أخبارالغرفة
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                فعالية الغرفة{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                {" "}
                اجتماعات الجلسة
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> مناسبات</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title=" مجلس الادارة" id="collasible">
              <NavDropdown.Item href="#action/3.1">
                مجلس ادارة الغرفة
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                لجان الغرفة{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link> القرارات والتعاميم</Nav.Link>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>الخدمات</Nav.Link>
            </Link>
            <NavDropdown title="مركز التدريب" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                الدورات السابقة
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {" "}
                الدورات المتاحة
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {" "}
                التسجيل بالدورات
              </NavDropdown.Item>
            </NavDropdown>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link> مكتبة الصور</Nav.Link>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link> اتصل بنا</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
