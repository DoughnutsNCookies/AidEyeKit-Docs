import DivSideBar from "@/components/DivSidebar";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Code,
  Link as NextUILink,
} from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import SpanCode from "@/components/SpanCode";

export default function Installation() {
  return (
    <main className="flex flex-col sm:h-screen sm:flex-row">
      <DivSideBar />
      <div className="flex flex-col gap-10 border-primary/30 px-4 py-10 sm:border-l-1 sm:px-10 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Installation</h1>
          <p>Run the following command to install the package.</p>
          <Code color="primary" className="p-4">
            <SpanCode text="npm" color="purple" />{" "}
            <SpanCode text="install aideyekit" color="primary" />
          </Code>
          <p>Content Delivery Network (CDN) will be supported soon!</p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Importing</h2>
          <p>
            Once installed, you can import the package into your project using
            the following code.
          </p>
          <Code color="primary" className="p-4">
            <SpanCode text="import" color="red" />{" "}
            <SpanCode text="{" color="white" />{" "}
            <SpanCode text="aideye" color="purple" />{" "}
            <SpanCode text="}" color="white" />{" "}
            <SpanCode text="from" color="red" />{" "}
            <SpanCode text='"aideyekit"' color="primary" />
            <SpanCode text=";" color="white" />
            <br />
            <SpanCode text="import" color="red" />{" "}
            <SpanCode text='"aideyekit/dist/aideye.css"' color="primary" />
            <SpanCode text=";" color="white" />
          </Code>
          <Card className="border-4 border-red-400 bg-secondary text-text">
            <CardHeader className="text-xl font-bold text-red-400">
              Important Note
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <p>
                  You will need to import the CSS file for{" "}
                  <span className="text-primary">Ai</span>dEyeKit to work
                  properly.
                </p>
                <p>
                  If you are want to style your own guide, you can visit the{" "}
                  <NextUILink underline="always" href="/styling">
                    Styling
                  </NextUILink>{" "}
                  section of this documentation
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-row justify-between">
          <NextLink href="/" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/get-started" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              Get Started
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
