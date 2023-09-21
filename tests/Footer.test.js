import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Footer from "../components/Footer";

test("it renders the footer links for Company section", () => {
  const { getByText } = render(<Footer />);
  const companyHeader = getByText("Company");
  const companyLinksList = companyHeader.parentElement.querySelector("ul");
  const links = companyLinksList.querySelectorAll("li > a");

  const expectedLinks = [
    { text: "About" },
    { text: "Terms of Use" },
    { text: "Privacy Policy" },
    { text: "How it Works" },
    { text: "Contact Us" },
  ];

  links.forEach((link, index) => {
    expect(link).toHaveTextContent(expectedLinks[index].text);
  });
});

test("it renders the footer links for Support section", () => {
  const { getByText } = render(<Footer />);
  const supportHeader = getByText("Support");
  const supportLinksList = supportHeader.parentElement.querySelector("ul");
  const links = supportLinksList.querySelectorAll("li > a");

  const expectedLinks = [
    { text: "Support Carrer" },
    { text: "24h Service" },
    { text: "Quick Chat" },
  ];

  links.forEach((link, index) => {
    expect(link).toHaveTextContent(expectedLinks[index].text);
  });
});

test("it renders the footer links for Contact section", () => {
  const { getByText } = render(<Footer />);
  const contactHeader = getByText("Contact");
  const contactLinksList = contactHeader.parentElement.querySelector("ul");
  const links = contactLinksList.querySelectorAll("li > a");

  const expectedLinks = [
    { text: "Contact" },
    { text: "Whatsapp" },
    { text: "Support 24h" },
  ];

  links.forEach((link, index) => {
    expect(link).toHaveTextContent(expectedLinks[index].text);
  });
});

test("it renders the copyright section", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Copyright © 2022 Dine Market")).toBeInTheDocument();

  expect(getByText("Design by.")).toBeInTheDocument();
  expect(getByText("Weird Design Studio")).toBeInTheDocument();
  expect(getByText("Code by.")).toBeInTheDocument();
  expect(getByText("shabrina12 on github")).toBeInTheDocument();
});
