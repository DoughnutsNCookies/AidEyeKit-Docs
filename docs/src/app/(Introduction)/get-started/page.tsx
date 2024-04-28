"use client";
import DivSideBar from "@/components/DivSidebar";
import { Button, Code } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import SpanCode from "@/components/SpanCode";
import { aideye } from "aideyekit";
import "aideyekit/dist/aideye.css";

export default function GetStarted() {
  const guiding = () => {
    const myAidEye = aideye({
      showProgress: true,
      steps: [
        {
          element: "#id",
          popover: {
            title: "Select through element ID",
            description: "By using id='id'",
          },
        },
        {
          element: ".class",
          popover: {
            title: "Or through class",
            description: "By using class='class'",
          },
        },
        {
          element: "#guiding",
          popover: {
            title: "Keyboard supported",
            description:
              "You can use your keyboard&apos;s arrow keys to control the guide.",
          },
        },
        {
          popover: {
            title: "Without any element",
            description: "You can pop-up without selecting an element as well.",
          },
        },
      ],
    });
    myAidEye.start();
  };

  const highlight = () => {
    const myAidEye = aideye();
    myAidEye.highlight({
      element: "#highlight",
      popover: {
        title: "Highlight element",
        description:
          "There are no additional steps involved in highlighting, unlike in guiding.",
      },
    });
  };

  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex w-full flex-col gap-10 border-primary/30 px-4 py-10 sm:w-[75vw] sm:border-l-1 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 id="id" className="text-4xl font-bold sm:text-5xl">
            Get Started
          </h1>
          <p className="class">
            Below you can find simple examples and the basic steps to get
            started. There are more examples and demos that you can find in the
            documentation under the demo section.
          </p>
        </div>
        <div id="guiding" className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Guiding</h2>
          <p>
            Here is a simple example of how to create a tour with multiple
            steps.
          </p>
          <div>
            <Code color="primary" className="w-full overflow-x-auto p-4">
              <SpanCode text="const" color="cyan" />{" "}
              <SpanCode text="myAidEye" color="white" />{" "}
              <SpanCode text="=" color="red" />{" "}
              <SpanCode text="aideye" color="purple" />
              <SpanCode text="({" color="white" />
              <br />
              &nbsp;&nbsp;
              <SpanCode text="showProgress:" color="white" />{" "}
              <SpanCode text="true" color="green" />
              <SpanCode text="," color="primary" />
              <br />
              &nbsp;&nbsp;
              <SpanCode text="steps: [" color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="{" color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="element:" color="white" />{" "}
              <SpanCode text="'#id'" color="primary" />
              <SpanCode text="," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="popover: {" color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="title:" color="white" />{" "}
              <SpanCode text="'Select through element ID'" color="primary" />
              <SpanCode text="," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="description:" color="white" />{" "}
              <SpanCode text="'By using id='id''" color="primary" />
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
              <SpanCode text="'.class'" color="primary" />
              <SpanCode text="," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="popover: {" color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="title:" color="white" />{" "}
              <SpanCode text="'Or through class'" color="primary" />
              <SpanCode text="," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="description:" color="white" />{" "}
              <SpanCode text="'By using class='class''" color="primary" />
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
              <SpanCode text="'#guiding'" color="primary" />
              <SpanCode text="," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="popover: {" color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="title:" color="white" />{" "}
              <SpanCode text="'Keyboard supported'" color="primary" />
              <SpanCode text="," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="description:" color="white" />{" "}
              <SpanCode
                text="'You can use your keyboard's arrow keys to control the guide.'"
                color="primary"
              />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="}," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="{" color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="popover: {" color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="title:" color="white" />{" "}
              <SpanCode text="'Without an element'" color="primary" />
              <SpanCode text="," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="description:" color="white" />{" "}
              <SpanCode
                text="'You can pop-up without selecting an element as well.'"
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
            <Button
              fullWidth
              id="guiding-btn"
              color="secondary"
              onClick={guiding}
            >
              Try the Guide!
            </Button>
          </div>
        </div>
        <div id="highlight" className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Highlighting</h2>
          <p>Here is a simple example of how to highlight an element.</p>
          <div>
            <Code color="primary" className="w-full overflow-x-auto p-4">
              <SpanCode text="const" color="cyan" />{" "}
              <SpanCode text="myAidEye" color="white" />{" "}
              <SpanCode text="=" color="red" />{" "}
              <SpanCode text="aideye" color="purple" />
              <SpanCode text="();" color="white" />
              <br />
              <SpanCode text="myAidEye." color="white" />
              <SpanCode text="highlight" color="white" />
              <SpanCode text="({" color="white" />
              <br />
              &nbsp;&nbsp;
              <SpanCode text="element: " color="white" />
              <SpanCode text="'#highlight'" color="primary" />
              <SpanCode text="," color="primary" />
              <br />
              &nbsp;&nbsp;
              <SpanCode text="popover: {" color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="title: " color="white" />
              <SpanCode text="'Highlight element'" color="primary" />
              <SpanCode text="," color="white" />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <SpanCode text="description: " color="white" />
              <SpanCode
                text="'There are no additional steps involved in highlighting, unlike in guiding.'"
                color="primary"
              />
              <br />
              &nbsp;&nbsp;
              <SpanCode text="}" color="white" />
              <br />
              <SpanCode text="});" color="white" />
              <br />
              <br />
              <SpanCode text="myAidEye." color="white" />
              <SpanCode text="start" color="purple" />
              <SpanCode text="();" color="white" />
            </Code>
            <Button fullWidth color="secondary" onClick={highlight}>
              Try Highlighting!
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <NextLink href="/installation" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              Installation
            </Button>
          </NextLink>
          <NextLink href="/aideye" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              AidEye
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
