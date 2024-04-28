"use client";
import DivSideBar from "@/components/DivSidebar";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Code,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import SpanCode from "@/components/SpanCode";

const popoverColumn = [
  {
    key: "Attribute",
    label: "Attribute",
  },
  {
    key: "Type",
    label: "Type",
  },
];

const popoverRow = [
  {
    key: "1",
    Attribute: "wrapper",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "2",
    Attribute: "arrow",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "3",
    Attribute: "title",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "4",
    Attribute: "description",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "5",
    Attribute: "footer",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "6",
    Attribute: "progress",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "7",
    Attribute: "previousButton",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "8",
    Attribute: "nextButton",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "9",
    Attribute: "closeButton",
    Type: <Code color="primary">HTMLElement</Code>,
  },
  {
    key: "10",
    Attribute: "footerButtons",
    Type: <Code color="primary">HTMLElement</Code>,
  },
];

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
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Popover Document Object Model (DOM)
          </h2>
          <p>
            Alternatively, you can also use the{" "}
            <Code color="primary">onPopoverRender</Code> hook to modify the
            popover DOM before it is displayed. The hook is called with the
            popover DOM as the first argument.
          </p>
          <Card className="bg-secondary text-text">
            <CardHeader className="text-xl font-bold text-primary">
              This hook has the following parameters:
            </CardHeader>
            <CardBody>
              <ul className="flex flex-col gap-1">
                <li>
                  <Code color="primary" className="bg-background/50">
                    popover
                  </Code>{" "}
                  - An object with references to the popover DOM elements such
                  as buttons, title, descriptions, body, container, etc.
                </li>
                <li>
                  <Code color="primary" className="bg-background/50">
                    options.config
                  </Code>{" "}
                  - The current configuration options.
                </li>
                <li>
                  <Code color="primary" className="bg-background/50">
                    options.state
                  </Code>{" "}
                  - The current state of aidEye.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Code color="primary" className="overflow-x-auto p-4">
            <SpanCode text="onPopoverRender" color="purple" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="(" color="white" />
            <SpanCode text="popover" color="orange" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="PopoverDOM" color="purple" />
            <SpanCode text="," color="white" />{" "}
            <SpanCode text="options" color="orange" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="{ config" color="white" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="Config" color="purple" />
            <SpanCode text="; state" color="white" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="State" color="purple" />{" "}
            <SpanCode text="})" color="white" />{" "}
            <SpanCode text="=> void" color="cyan" />
            <SpanCode text=";" color="white" />{" "}
          </Code>
          <Table
            aria-label="AidEye configuration list"
            removeWrapper
            className="overflow-x-auto"
          >
            <TableHeader columns={popoverColumn}>
              {(column) => (
                <TableColumn
                  className="bg-primary text-background"
                  key={column.key}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={popoverRow}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
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
