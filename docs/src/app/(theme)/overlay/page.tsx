"use client";
import DivSideBar from "@/components/DivSidebar";
import { Button, Code, Link } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import SpanCode from "@/components/SpanCode";
import "aideyekit/dist/aideye.css";
import { aideye } from "aideyekit";

export default function Overlay() {
  const color = () => {
    const myAidEye = aideye({
      overlayColor: "white",
    });

    myAidEye.highlight({
      element: "#color",
      popover: {
        title: "CSS",
        description:
          "You can customize the overlay color by using overlayColor in the aideye configuration.",
      },
    });
  };

  const opacity = () => {
    const myAidEye = aideye({
      overlayColor: "white",
      overlayOpacity: 0.3,
    });

    myAidEye.highlight({
      element: "#opacity",
      popover: {
        title: "CSS",
        description:
          "You can also customize the overlay opacity by using overlayOpacity in the aideye configuration.",
      },
    });
  };

  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex w-full flex-col gap-10 border-primary/30 px-4 py-10 sm:w-[75vw] sm:border-l-1 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Overlay</h1>
          <p>
            There are two ways to color the overlay of aideye:{" "}
            <Link underline="always" className="cursor-pointer">
              CSS
            </Link>{" "}
            and{" "}
            <Link underline="always" className="cursor-pointer">
              AidEye Configuration
            </Link>
            .
          </p>
        </div>
        <div id="color" className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Overlay Color</h2>
          <p>
            You can customize the overlay color by using{" "}
            <Code color="primary">overlayColor</Code> in the aideye
            configuration.
          </p>
          <Code color="primary" className="w-full overflow-x-auto p-4">
            <SpanCode text="const" color="cyan" />{" "}
            <SpanCode text="myAidEye" color="white" />{" "}
            <SpanCode text="=" color="red" />{" "}
            <SpanCode text="aideye" color="purple" />
            <SpanCode text="({" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="overlayColor:" color="white" />{" "}
            <SpanCode text="'white'" color="primary" />
            <br />
            <SpanCode text="});" color="white" />
            <br />
            <br />
            <SpanCode text="myAidEye." color="white" />
            <SpanCode text="highlight" color="white" />
            <SpanCode text="({" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="element: " color="white" />
            <SpanCode text="'#color'" color="primary" />
            <SpanCode text="," color="primary" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="popover: {" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="title: " color="white" />
            <SpanCode text="'CSS'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="description: " color="white" />
            <SpanCode
              text="'You can customize the overlay color by using overlayColor in the aideye configuration.'"
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
          <Button fullWidth color="secondary" onClick={color}>
            Try Using overlayColor!
          </Button>
        </div>
        <div id="opacity" className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Overlay Opacity</h2>
          <p>
            You can also customize the overlay opacity by using{" "}
            <Code color="primary">overlayOpacity</Code> in the aideye
            configuration.
          </p>
          <Code color="primary" className="w-full overflow-x-auto p-4">
            <SpanCode text="const" color="cyan" />{" "}
            <SpanCode text="myAidEye" color="white" />{" "}
            <SpanCode text="=" color="red" />{" "}
            <SpanCode text="aideye" color="purple" />
            <SpanCode text="({" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="overlayColor:" color="white" />{" "}
            <SpanCode text="'white'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="overlayOpacity:" color="white" />{" "}
            <SpanCode text="0.3" color="primary" />
            <br />
            <SpanCode text="});" color="white" />
            <br />
            <br />
            <SpanCode text="myAidEye." color="white" />
            <SpanCode text="highlight" color="white" />
            <SpanCode text="({" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="element: " color="white" />
            <SpanCode text="'#overlay'" color="primary" />
            <SpanCode text="," color="primary" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="popover: {" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="title: " color="white" />
            <SpanCode text="'CSS'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="description: " color="white" />
            <SpanCode
              text="'You can also customize the overlay opacity by using overlayOpacity in the aideye configuration.'"
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
          <Button fullWidth color="secondary" onClick={opacity}>
            Try Using overlayOpacity!
          </Button>
        </div>
        <div className="flex flex-row justify-between">
          <NextLink href="/styling-example" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              Styling Example
            </Button>
          </NextLink>
          <NextLink href="/highlighting" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              Highlighting
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
