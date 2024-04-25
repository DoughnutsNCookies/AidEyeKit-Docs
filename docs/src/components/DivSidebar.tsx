"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Link as NextUILink,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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
  new LinkSection("Installation", "installation"),
  new LinkSection("Example", "example"),
  new LinkSection("Configuration", "configuration"),
  new LinkSection("API Reference", "api-reference"),
  new LinkSection("Theme", "theme"),
];

const demo: LinkSection[] = [
  new LinkSection("Highlighting", "highlighting"),
  new LinkSection("Animation", "animation"),
  new LinkSection("Styling", "styling"),
  new LinkSection("Progress", "progress"),
  new LinkSection("Async", "async"),
  new LinkSection("On Exit", "on-exit"),
  new LinkSection("Popup Position", "popup-position"),
  new LinkSection("Event Handlers", "event-handlers"),
];

export default function DivSideBar() {
  const [currentPage, setCurrentPage] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPage(window.location.pathname);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <aside className="hidden h-full w-[25vw] min-w-[25vw] items-center sm:block">
        <div className="mt-20 flex flex-col items-end justify-between gap-4 p-4 pt-0 text-end">
          <Link href="/">
            <Image
              width={75}
              height={75}
              alt="AidEyeKit Logo"
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
          <h3 className="text-xl font-bold">Introduction</h3>
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
          <h3 className="text-xl font-bold">Demo</h3>
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
      </aside>
      <Navbar
        onMenuOpenChange={setNavOpen}
        isBordered
        className="border-primary/30"
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
