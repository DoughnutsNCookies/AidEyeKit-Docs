"use client";
import DivSideBar from "@/components/DivSidebar";
import { Button, Code } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import { aideye } from "aideyekit";
import "aideyekit/dist/aideye.css";
import "@/styles/myaideye-theme.css";
import SpanCode from "@/components/SpanCode";

export default function StylingExample() {
  const highlight = () => {
    const myAidEye = aideye({
      popoverClass: "aideye-theme",
      steps: [
        {
          element: "#css",
          popover: {
            title: "CSS File",
            description: "The CSS file used to style this example.",
          },
        },
        {
          element: "#code",
          popover: {
            title: "Code",
            description: "The code used to style this example.",
          },
        },
      ],
    });
    myAidEye.start();
  };

  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex w-full flex-col gap-10 border-primary/30 px-4 py-10 sm:w-[75vw] sm:border-l-1 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Styling Example</h1>
          <p>Here&apos;s an example of how to style your aideye.</p>
          <Button fullWidth color="secondary" onClick={highlight}>
            Try Our AidEyeKit Theme!
          </Button>
        </div>
        <div id="css" className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">CSS File</h2>
          <p>
            Here&apos;s the CSS file used to style the example above. This file
            is named <Code color="primary">myaideye-theme.css</Code>, but you
            can name yours whatever you like.
          </p>
          <Code color="primary" className="w-full overflow-x-auto p-4">
            <SpanCode text=".aideye-popover.aideye-theme" color="green" />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="background-color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#344073" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#F2FDFF" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
            <br />
            <br />
            <SpanCode
              text=".aideye-popover.aideye-theme .aideye-popover-title"
              color="green"
            />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="font-size" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="20px" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
            <br />
            <br />
            <SpanCode
              text=".aideye-popover.aideye-theme .aideye-popover-title"
              color="green"
            />
            <SpanCode text="," color="white" />
            <br />
            <SpanCode
              text=".aideye-popover.aideye-theme .aideye-popover-description"
              color="green"
            />
            <SpanCode text="," color="white" />
            <br />
            <SpanCode
              text=".aideye-popover.aideye-theme .aideye-popover-progress-text"
              color="green"
            />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#F2FDFF" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
            <br />
            <br />
            <SpanCode
              text=".aideye-popover.aideye-theme button"
              color="green"
            />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="flex" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="1" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="text-align" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="center" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="background-color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#F2FDFF" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#101935" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="border" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="2px solid #F2FDFF" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="font-size" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="14px" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="padding" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="5px 8px" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="border-radius" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="6px" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
            <br />
            <br />
            <SpanCode
              text=".aideye-popover.aideye-theme .aideye-popover-close-btn"
              color="green"
            />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#F2FDFF" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="padding" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="0" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="background-color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#344073" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="border" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="none" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
            <br />
            <br />
            <SpanCode text=".aideye-popover.aideye-theme" color="green" />{" "}
            <br />
            &nbsp;&nbsp;
            <SpanCode
              text=".aideye-popover-arrow-side-left.aideye-popover-arrow"
              color="green"
            />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="border-left-color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#344073" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
            <br />
            <br />
            <SpanCode text=".aideye-popover.aideye-theme" color="green" />{" "}
            <br />
            &nbsp;&nbsp;
            <SpanCode
              text=".aideye-popover-arrow-side-right.aideye-popover-arrow"
              color="green"
            />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="border-right-color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#344073" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
            <br />
            <br />
            <SpanCode text=".aideye-popover.aideye-theme" color="green" />{" "}
            <br />
            &nbsp;&nbsp;
            <SpanCode
              text=".aideye-popover-arrow-side-top.aideye-popover-arrow"
              color="green"
            />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp; <SpanCode text="border-top-color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#344073" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
            <br />
            <br />
            <SpanCode text=".aideye-popover.aideye-theme" color="green" />{" "}
            <br />
            &nbsp;&nbsp;
            <SpanCode
              text=".aideye-popover-arrow-side-bottom.aideye-popover-arrow"
              color="green"
            />{" "}
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp; <SpanCode text="border-bottom-color" color="cyan" />
            <SpanCode text=":" color="white" />{" "}
            <SpanCode text="#344073" color="purple" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="}" color="white" />
          </Code>
        </div>
        <div id="code" className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Code</h2>
          <p>Here&apos;s the code used to style the example above.</p>
          <Code color="primary" className="w-full overflow-x-auto p-4">
            <SpanCode text="const" color="cyan" />{" "}
            <SpanCode text="myAidEye" color="white" />{" "}
            <SpanCode text="=" color="red" />{" "}
            <SpanCode text="aideye" color="purple" />
            <SpanCode text="({" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="popoverClass:" color="white" />{" "}
            <SpanCode text="'aideye-theme'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="steps: [" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="element:" color="white" />{" "}
            <SpanCode text="'#css'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="popover: {" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="title:" color="white" />{" "}
            <SpanCode text="'CSS File'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="description:" color="white" />{" "}
            <SpanCode
              text="'The CSS file used to style this example.'"
              color="primary"
            />{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="}" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="}," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="element:" color="white" />{" "}
            <SpanCode text="'#code'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="popover: {" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="title:" color="white" />{" "}
            <SpanCode text="'Code'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="description:" color="white" />{" "}
            <SpanCode
              text="'The code used to style this example.'"
              color="primary"
            />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="}" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="}" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="]" color="white" />
            <br />
            <SpanCode text="});" color="white" />
            <br />
            <br />
            <SpanCode text="myAidEye." color="white" />
            <SpanCode text="start" color="purple" />
            <SpanCode text="();" color="white" />
          </Code>
        </div>
        <div className="flex flex-row justify-between">
          <NextLink href="/css-classes" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              CSS Classes
            </Button>
          </NextLink>
          <NextLink href="/overlay" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              Overlay
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
