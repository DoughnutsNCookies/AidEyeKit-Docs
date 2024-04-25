import DivSideBar from "@/components/DivSidebar";
import { Button, Link as NextUILink } from "@nextui-org/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin, FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";

export default function Installation() {
  return (
    <main className="flex flex-col sm:h-screen sm:flex-row">
      <DivSideBar />
      <div className="flex flex-col gap-10 border-primary/30 px-4 py-10 sm:border-l-1 sm:px-10 sm:py-20 lg:w-[50vw] lg:min-w-[50vw]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold sm:text-5xl">
            <span className="text-primary">Ai</span>dEyeKit Documentation
          </h1>
          <p>
            All the information you need to get started with AidEyeKit, with
            examples and demo built into this documentation.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Why <span className="text-primary">Ai</span>dEyeKit?
          </h2>
          <ul className="ml-4 list-decimal">
            <li>Written in vanilla TypeScript</li>
            <li>ZERO dependencies</li>
            <li>Highly customizable</li>
            <li>Easy to use</li>
            <li>Lightweight</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold sm:text-3xl">Social Medias</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <NextUILink
                href="https://x.com/AidEyeKit"
                className="flex flex-row gap-2"
              >
                <FaSquareXTwitter size={24} />
                x.com/AidEyeKit
              </NextUILink>
            </li>
            <li>
              <NextUILink
                href="https://facebook.com/AidEyeKit"
                className="flex flex-row gap-2"
              >
                <FaFacebookSquare size={24} />
                facebook.com/AidEyeKit
              </NextUILink>
            </li>
            <li>
              <NextUILink
                href="https://linkedin.com/company/AidEyeKit"
                className="flex flex-row gap-2"
              >
                <FaLinkedin size={24} />
                linkedin.com/company/AidEyeKit
              </NextUILink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold sm:text-3xl">Authors</h2>
          <ul>
            <li>
              <NextUILink
                href="https://github.com/DoughnutsNCookies"
                target="_blank"
              >
                @DoughnutsNCookies
              </NextUILink>
            </li>
            <li>
              <NextUILink href="https://github.com/nuyiep" target="_blank">
                @nuyiep
              </NextUILink>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[45%]" />
          <NextLink href="/installation" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              Installation
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
