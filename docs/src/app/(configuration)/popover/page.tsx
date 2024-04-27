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
  {
    key: "Description",
    label: "Description",
  },
];

const popoverRow = [
  {
    key: "1",
    Attribute: "title",
    Type: <Code color="primary">string</Code>,
    Description: "Title shown in the popover. You can use HTML.",
  },
  {
    key: "2",
    Attribute: "description",
    Type: <Code color="primary">string</Code>,
    Description: "Descriptions shown in the popover. You can use HTML.",
  },
  {
    key: "3",
    Attribute: "side",
    Type: (
      <Code color="primary">
        &quot;top&quot;
        <br />| &quot;right&quot;
        <br />| &quot;bottom&quot;
        <br />| &quot;left&quot;
      </Code>
    ),
    Description: "The position of the popover relative to the target element.",
  },
  {
    key: "4",
    Attribute: "align",
    Type: (
      <Code color="primary">
        &quot;start&quot;
        <br />| &quot;center&quot;
        <br />| &quot;end&quot;
      </Code>
    ),
    Description: "The alignment of the popover relative to the target element.",
  },
  {
    key: "5",
    Attribute: "showButtons",
    Type: (
      <Code color="primary">
        (&quot;next&quot;
        <br />| &quot;previous&quot;
        <br />| &quot;close&quot;)[]
      </Code>
    ),
    Description:
      "Array of buttons to show in the popover. When highlighting a single element, there are no buttons by default.",
  },
  {
    key: "6",
    Attribute: "disableButtons",
    Type: (
      <Code color="primary">
        (&quot;next&quot;
        <br />| &quot;previous&quot;
        <br />| &quot;close&quot;)[]
      </Code>
    ),
    Description: "An array of buttons to disable.",
  },
  {
    key: "7",
    Attribute: "nextBtnText",
    Type: <Code color="primary">string</Code>,
    Description: "Text to show in the 'next' button.",
  },
  {
    key: "8",
    Attribute: "prevBtnText",
    Type: <Code color="primary">string</Code>,
    Description: "Text to show in the 'previous' button.",
  },
  {
    key: "9",
    Attribute: "doneBtnText",
    Type: <Code color="primary">string</Code>,
    Description:
      "Text to show in the 'done' button, on the last step of a tour.",
  },
  {
    key: "10",
    Attribute: "showProgress",
    Type: <Code color="primary">boolean</Code>,
    Description: "Whether to show the progress text in popover.",
  },
  {
    key: "11",
    Attribute: "progressText",
    Type: <Code color="primary">string</Code>,
    Description: (
      <div>
        <p>
          Template for the progress text. Use{" "}
          <Code color="primary">{`{{current}}`}</Code> and{" "}
          <Code color="primary">{`{{total}}`}</Code> as placeholders.
        </p>
        <p>
          Eg: &quot;<Code color="primary">{`{{current}}`}</Code> of{" "}
          <Code color="primary">{`{{total}}`}</Code>&quot;
        </p>
      </div>
    ),
  },
  {
    key: "12",
    Attribute: "popoverClass",
    Type: <Code color="primary">string</Code>,
    Description:
      "Custom class to add to the popover element. This can be used to style the popover.",
  },
];

export default function Popover() {
  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex flex-col gap-10 border-primary/30 px-4 py-10 sm:border-l-1 sm:px-10 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Popover</h1>
          <p>
            The popover (PopoverDOM) is the main UI element of Driver.js.
            It&apos;s the element that highlights the target element, and shows
            the step content.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Popover Configuration
          </h2>
          <p>
            You can configure the popover globally, or per step. Given below are
            some of the available configuration options.
          </p>
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
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Popover Render Hook
          </h2>
          <p>Called after the popover is rendered.</p>
          <Card className="bg-secondary text-text">
            <CardHeader className="text-xl font-bold text-primary">
              This hook has the following parameters:
            </CardHeader>
            <CardBody>
              <ul className="flex flex-col gap-1">
                <li>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    popover
                  </Code>{" "}
                  - An object with references to the popover DOM elements such
                  as buttons, title, descriptions, body, container, etc.
                </li>
                <li>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    options.config
                  </Code>{" "}
                  - The current configuration options.
                </li>
                <li>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    options.state
                  </Code>{" "}
                  - The current state of the driver.
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
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">AidEye Button Hook</h2>
          <p>Hooks to run on button clicks.</p>
          <Card className="bg-secondary text-text">
            <CardHeader className="text-xl font-bold text-primary">
              Each hook receives the following parameters:
            </CardHeader>
            <CardBody>
              <ul className="flex flex-col gap-1">
                <li>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    element
                  </Code>{" "}
                  - The current DOM element of the step.
                </li>
                <li>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    step
                  </Code>{" "}
                  - The step object configured for the step.
                </li>
                <li>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    options.config
                  </Code>{" "}
                  - The current configuration options.
                </li>
                <li>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    options.state
                  </Code>{" "}
                  - The current state of the driver.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Code color="primary" className="overflow-x-auto p-4">
            <SpanCode text="onNextClick" color="purple" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="(" color="white" />
            <SpanCode text="element" color="orange" />
            <SpanCode text="?:" color="red" />{" "}
            <SpanCode text="Element" color="purple" />
            <SpanCode text="," color="white" />{" "}
            <SpanCode text="step" color="orange" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="AidEyeStep" color="purple" />
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
            <br />
            <SpanCode text="onPrevClick" color="purple" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="(" color="white" />
            <SpanCode text="element" color="orange" />
            <SpanCode text="?:" color="red" />{" "}
            <SpanCode text="Element" color="purple" />
            <SpanCode text="," color="white" />{" "}
            <SpanCode text="step" color="orange" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="AidEyeStep" color="purple" />
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
            <br />
            <SpanCode text="onCloseClick" color="purple" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="(" color="white" />
            <SpanCode text="element" color="orange" />
            <SpanCode text="?:" color="red" />{" "}
            <SpanCode text="Element" color="purple" />
            <SpanCode text="," color="white" />{" "}
            <SpanCode text="step" color="orange" />
            <SpanCode text=":" color="red" />{" "}
            <SpanCode text="AidEyeStep" color="purple" />
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
          </Code>
          <Card className="border-4 border-red-400 bg-secondary text-text">
            <CardHeader className="text-xl font-bold text-red-400">
              Important Note
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <p>
                  By overriding{" "}
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    onNextClick
                  </Code>{" "}
                  and {""}
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    onPrevClick
                  </Code>{" "}
                  hooks, you control the navigation of the driver.
                </p>
                <p>
                  This means that the user won&apos;t be able to navigate using
                  the buttons and you will have to either call{" "}
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    driverObj.moveNext()
                  </Code>{" "}
                  or{" "}
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    driverObj.movePrevious()
                  </Code>{" "}
                  to navigate to the next/previous step.
                </p>
                <p>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    onNextClick
                  </Code>{" "}
                  and{" "}
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    onPrevClick
                  </Code>{" "}
                  hooks can be configured at the step level as well. When
                  configured at the driver level, you control the navigation for
                  all the steps. When configured at the step level, you control
                  the navigation for that particular step only.
                </p>
              </div>
            </CardBody>
            <CardHeader className="text-xl font-bold text-primary">
              Ideas you can implement
            </CardHeader>
            <CardBody>
              <p>
                You can use this to implement custom logic for navigating
                between steps.
              </p>
              <p>
                This is also useful when you are dealing with dynamic content
                and want to highlight the next or previous element based on some
                logic.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-row justify-between">
          <NextLink href="/aideye" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              AidEye
            </Button>
          </NextLink>
          <NextLink href="/aideyestep" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              AidEyeStep
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
