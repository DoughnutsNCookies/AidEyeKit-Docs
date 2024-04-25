import DivSideBar from "@/components/DivSidebar";
import { Button, Link } from "@nextui-org/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Installation() {
  return (
    <main className="flex flex-col sm:flex-row xl:h-screen">
      <DivSideBar />
      <div className="flex flex-col gap-10 border-primary/30 px-4 py-10 sm:border-l-1 sm:px-10 sm:py-20 lg:w-[50vw] lg:min-w-[50vw]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl sm:text-5xl">
            <span className="text-primary">Ai</span>dEyeKit Documentation
          </h1>
          <p>
            All the information you need to get started with AidEyeKit, with
            examples and demo built into this documentation.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl sm:text-4xl">
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
          <h2 className="text-4xl">Social Medias</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="https://x.com/AidEyeKit"
                className="flex flex-row gap-2"
              >
                <FaSquareXTwitter size={24} /> x.com/AidEyeKit
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com/AidEyeKit"
                className="flex flex-row gap-2"
              >
                <FaFacebookSquare size={24} /> facebook.com/AidEyeKit
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin/com/company/AidEyeKit"
                className="flex flex-row gap-2"
              >
                <FaLinkedin size={24} /> linkedin/com/company/AidEyeKit
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl">Authors</h2>
          <ul>
            <li>
              <Link href="https://github.com/DoughnutsNCookies" target="_blank">
                @DoughnutsNCookies
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nuyiep" target="_blank">
                @nuyiep
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[40%]" />
          <Button
            size="md"
            variant="ghost"
            color="primary"
            endContent={<FaArrowRight />}
            className="w-[40%]"
          >
            Installation
          </Button>
        </div>
      </div>
    </main>
  );
}
