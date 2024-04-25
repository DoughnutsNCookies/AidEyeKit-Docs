import DivSideBar from "@/components/DivSidebar";
import { Link } from "@nextui-org/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Installation() {
  return (
    <main className="flex flex-row">
      <DivSideBar />
      <div className="ml-10 mt-20 flex w-[50vw] min-w-[50vw] flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">
            <span className="text-primary">Ai</span>dEyeKit Documentation
          </h1>
          <p>
            All the information you need to get started with AidEyeKit, with
            examples and demo built into this documentation.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl">
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
      </div>
    </main>
  );
}
