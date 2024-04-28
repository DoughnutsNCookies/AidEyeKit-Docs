import DivSideBar from "@/components/DivSidebar";
import { Button, Code } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import SpanCode from "@/components/SpanCode";

export default function ApplyingCSS() {
  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex w-full flex-col gap-10 border-primary/30 px-4 py-10 sm:w-[75vw] sm:border-l-1 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Applying CSS</h1>
          <p>
            You can customize the look and feel of aideye by adding custom class
            to popover or applying CSS to different classes used by{" "}
            <span className="text-primary">Ai</span>dEyeKit.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Global Level</h2>
          <p>
            You can set <Code color="primary">popoverClass</Code> globally in
            the aideye configuration.
          </p>
          <Code color="primary" className="w-full overflow-x-auto p-4">
            <SpanCode text="const" color="cyan" />{" "}
            <SpanCode text="myAidEye" color="white" />{" "}
            <SpanCode text="=" color="red" />{" "}
            <SpanCode text="aideye" color="purple" />
            <SpanCode text="({" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="popoverClass:" color="white" />{" "}
            <SpanCode text="'aideye-theme'" color="primary" /> <br />
            <SpanCode text="});" color="white" />{" "}
          </Code>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Step Level</h2>
          <p>
            You can also set <Code color="primary">popoverClass</Code> at the
            step level to apply custom class to the popover and then use CSS to
            apply styles.
          </p>
          <Code color="primary" className="w-full overflow-x-auto p-4">
            <SpanCode text="const" color="cyan" />{" "}
            <SpanCode text="myAidEye" color="white" />{" "}
            <SpanCode text="=" color="red" />{" "}
            <SpanCode text="aideye" color="purple" />
            <SpanCode text="({" color="white" />
            <br />
            &nbsp;&nbsp;
            <SpanCode text="steps: [" color="white" /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="{" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="element:" color="white" />{" "}
            <SpanCode text="'#element'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="popover: {" color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="title:" color="white" />{" "}
            <SpanCode text="'Title'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="description:" color="white" />{" "}
            <SpanCode text="'Description'" color="primary" />
            <SpanCode text="," color="white" />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SpanCode text="popoverClass:" color="white" />
            <SpanCode text="'aideye-theme'" color="primary" />
            <SpanCode text="," color="white" />
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
            <SpanCode text="});" color="white" />{" "}
          </Code>
        </div>
        <div className="flex flex-row justify-between">
          <NextLink href="/api-list" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              API List
            </Button>
          </NextLink>
          <NextLink href="/css-classes" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              CSS Classes
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
