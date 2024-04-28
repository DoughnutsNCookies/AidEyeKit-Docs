"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Link as NextUILink,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

class LinkSection {
  title: string;
  href: string;

  constructor(title: string, href: string) {
    this.title = title;
    this.href = href;
  }
}

const introduction: LinkSection[] = [
  new LinkSection("Home", ""),
  new LinkSection("Installation", "installation"),
  new LinkSection("Get Started", "get-started"),
];

const configuration: LinkSection[] = [
  new LinkSection("AidEye", "aideye"),
  new LinkSection("Popover", "popover"),
  new LinkSection("AidEyeStep", "aideyestep"),
  new LinkSection("State", "state"),
  new LinkSection("API List", "api-list"),
];

const theme: LinkSection[] = [
  new LinkSection("CSS Classes", "css-classes"),
  new LinkSection("Applying CSS", "applying-css"),
  new LinkSection("Overlay Color", "overlay-color"),
];

const demo: LinkSection[] = [
  new LinkSection("Highlighting", "highlighting"),
  new LinkSection("Animation", "animation"),
  new LinkSection("Styling", "styling"),
  new LinkSection("Progress", "progress"),
  new LinkSection("Async", "async"),
  new LinkSection("On Exit", "on-exit"),
  new LinkSection("Pop-up Position", "pop-up-position"),
  new LinkSection("Event Handlers", "event-handlers"),
];

export default function DivSideBar() {
  const [currentPage, setCurrentPage] = useState<string>("");
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <div>
      <aside className="my-20 ml-4 hidden w-[25vw] min-w-[25vw] items-center sm:block">
        <div className="flex flex-col items-end justify-between gap-4 pb-4 pr-4 text-end">
          <Link href="/">
            <Image
              width={75}
              height={75}
              alt="AidEyeKit Logo"
              title="AidEyeKit Logo"
              src="/brand/logo.svg"
            />
          </Link>
          <div className="flex flex-col items-end gap-2 text-end">
            <div>
              <h2 className="text-xl">
                <span className="text-primary">Ai</span>dEyeKit
              </h2>
              <h3>Documentation</h3>
            </div>
            <NextUILink
              showAnchorIcon
              href="https://aideyekit.com"
              className="text-primary"
            >
              Home Page
            </NextUILink>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
          <h3 className="text-xl font-bold text-primary">Introduction</h3>
          <ul className="flex flex-col items-end gap-1 text-text/50">
            {introduction.map((link: LinkSection) => {
              const { title, href } = link;
              return (
                <li key={title}>
                  <Link
                    className={`${
                      currentPage === `/${href}` ? "text-text" : "text-text/50"
                    } transition-all ease-in-out hover:text-text`}
                    href={`/${href}`}
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
          <h3 className="text-xl font-bold text-primary">Configuration</h3>
          <ul className="flex flex-col items-end gap-1 text-text/50">
            {configuration.map((link: LinkSection) => {
              const { title, href } = link;
              return (
                <li key={title}>
                  <Link
                    className={`${
                      currentPage === `/${href}` ? "text-text" : "text-text/50"
                    } transition-all ease-in-out hover:text-text`}
                    href={`/${href}`}
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
          <h3 className="text-xl font-bold text-primary">Theme</h3>
          <ul className="flex flex-col items-end gap-1 text-text/50">
            {theme.map((link: LinkSection) => {
              const { title, href } = link;
              return (
                <li key={title}>
                  <Link
                    className={`${
                      currentPage === `/${href}` ? "text-text" : "text-text/50"
                    } transition-all ease-in-out hover:text-text`}
                    href={`/${href}`}
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
          <h3 className="text-xl font-bold text-primary">Demo</h3>
          <ul className="flex flex-col items-end gap-1 text-text/50">
            {demo.map((link: LinkSection) => {
              const { title, href } = link;
              return (
                <li key={title}>
                  <Link
                    className={`${
                      currentPage === `/${href}` ? "text-text" : "text-text/50"
                    } transition-all ease-in-out hover:text-text`}
                    href={`/${href}`}
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <Navbar
        onMenuOpenChange={setNavOpen}
        isBordered
        className="block border-primary/30 sm:hidden"
      >
        <NavbarMenu>
          <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
            <h3 className="text-xl font-bold text-primary">Introduction</h3>
            <ul className="flex flex-col items-end gap-1 text-text/50">
              {introduction.map((link: LinkSection) => {
                const { title, href } = link;
                return (
                  <Link
                    key={title}
                    className={`${
                      currentPage === `/${href}` ? "text-text" : "text-text/50"
                    } transition-all ease-in-out hover:text-text`}
                    href={`/${href}`}
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
            <h3 className="text-xl font-bold text-primary">Configuration</h3>
            <ul className="flex flex-col items-end gap-1 text-text/50">
              {configuration.map((link: LinkSection) => {
                const { title, href } = link;
                return (
                  <Link
                    key={title}
                    className={`${
                      currentPage === `/${href}` ? "text-text" : "text-text/50"
                    } transition-all ease-in-out hover:text-text`}
                    href={`/${href}`}
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
            <h3 className="text-xl font-bold text-primary">Theme</h3>
            <ul className="flex flex-col items-end gap-1 text-text/50">
              {theme.map((link: LinkSection) => {
                const { title, href } = link;
                return (
                  <Link
                    key={title}
                    className={`${
                      currentPage === `/${href}` ? "text-text" : "text-text/50"
                    } transition-all ease-in-out hover:text-text`}
                    href={`/${href}`}
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
            <h3 className="text-xl font-bold text-primary">Demo</h3>
            <ul className="flex flex-col items-end gap-1 text-text/50">
              {demo.map((link: LinkSection) => {
                const { title, href } = link;
                return (
                  <Link
                    key={title}
                    className={`${
                      currentPage === `/${href}` ? "text-text" : "text-text/50"
                    } transition-all ease-in-out hover:text-text`}
                    href={`/${href}`}
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-end justify-between gap-2 p-4 text-end">
            <NextUILink
              showAnchorIcon
              href="https://aideyekit.com"
              className="text-primary"
            >
              Home Page
            </NextUILink>
          </div>
        </NavbarMenu>
        <NavbarContent>
          <NavbarBrand>
            <Link href="/" className="flex flex-row items-center gap-2">
              <Image
                width={40}
                height={40}
                src="brand/logo.svg"
                title="AidEyeKit Logo"
                alt="AidEyeKit Logo"
              />
              <p className="font-bold">
                <span className="text-primary">Ai</span>dEyeKit
              </p>
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={navOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
