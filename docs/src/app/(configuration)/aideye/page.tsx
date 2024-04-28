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

const aidEyeColumn = [
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
  {
    key: "Default",
    label: "Default",
  },
];

const aidEyeRow = [
  {
    key: "1",
    Attribute: "steps",
    Type: <Code color="primary">AidEyeStep[]</Code>,
    Description: "Array of steps to highlight.",
    Default: "-",
  },
  {
    key: "2",
    Attribute: "animate",
    Type: <Code color="primary">boolean</Code>,
    Description: "Product tour animation.",
    Default: <Code color="primary">true</Code>,
  },
  {
    key: "3",
    Attribute: "overlayColor",
    Type: <Code color="primary">string</Code>,
    Description: "Color of the overlay.",
    Default: <Code color="primary">black</Code>,
  },
  {
    key: "4",
    Attribute: "smoothScroll",
    Type: <Code color="primary">boolean</Code>,
    Description: "Highlighted element smooth scrolling.",
    Default: <Code color="primary">false</Code>,
  },
  {
    key: "5",
    Attribute: "allowClose",
    Type: <Code color="primary">boolean</Code>,
    Description: "Clicking on the backdrop will close the popover.",
    Default: <Code color="primary">true</Code>,
  },
  {
    key: "6",
    Attribute: "overlayOpacity",
    Type: <Code color="primary">number</Code>,
    Description: "Opacity of the backdrop.",
    Default: <Code color="primary">0.5</Code>,
  },
  {
    key: "7",
    Attribute: "stagePadding",
    Type: <Code color="primary">number</Code>,
    Description: "Distance between the highlighted element and the cutout.",
    Default: <Code color="primary">10</Code>,
  },
  {
    key: "8",
    Attribute: "stageRadius",
    Type: <Code color="primary">number</Code>,
    Description: "Radius of the cutout around the highlighted element.",
    Default: <Code color="primary">5</Code>,
  },
  {
    key: "9",
    Attribute: "allowKeyboardControl",
    Type: <Code color="primary">boolean</Code>,
    Description: "Using keyboard to navigation.",
    Default: <Code color="primary">true</Code>,
  },
  {
    key: "10",
    Attribute: "disableActiveInteraction",
    Type: <Code color="primary">boolean</Code>,
    Description: "Disable interaction with the highlighted element.",
    Default: <Code color="primary">false</Code>,
  },
  {
    key: "11",
    Attribute: "popoverClass",
    Type: <Code color="primary">string</Code>,
    Description: "If you want to add custom class to the popover.",
    Default: "-",
  },
  {
    key: "12",
    Attribute: "popoverOffset",
    Type: <Code color="primary">number</Code>,
    Description: "Distance between the popover and the highlighted element.",
    Default: <Code color="primary">10</Code>,
  },
  {
    key: "13",
    Attribute: "showButtons",
    Type: <Code color="primary">AllowedButtons[]</Code>,
    Description: "Array of buttons to show in the popover.",
    Default: (
      <Code color="primary">
        [&quot;next&quot;,
        <br /> &quot;previous&quot;,
        <br /> &quot;close&quot;]
      </Code>
    ),
  },
  {
    key: "14",
    Attribute: "disableButtons",
    Type: <Code color="primary">AllowedButtons[]</Code>,
    Description: "Array of buttons to disable.",
    Default: "-",
  },
  {
    key: "15",
    Attribute: "showProgress",
    Type: <Code color="primary">boolean</Code>,
    Description: "Show the progress text in popover.",
    Default: <Code color="primary">false</Code>,
  },
  {
    key: "16",
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
          Eg: &apos;<Code color="primary">{`{{current}}`}</Code> of{" "}
          <Code color="primary">{`{{total}}`}</Code>&apos;
        </p>
      </div>
    ),
    Default: "-",
  },
  {
    key: "17",
    Attribute: "nextBtnText",
    Type: <Code color="primary">string</Code>,
    Description: "Text to show in the 'next' button.",
    Default: "-",
  },
  {
    key: "18",
    Attribute: "prevBtnText",
    Type: <Code color="primary">string</Code>,
    Description: "Text to show in the 'previous' button.",
    Default: "-",
  },
  {
    key: "19",
    Attribute: "doneBtnText",
    Type: <Code color="primary">string</Code>,
    Description:
      "Text to show in the 'done' button, on the last step of a tour.",
    Default: "-",
  },
];

export default function AidEye() {
  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex w-full flex-col gap-10 border-primary/30 px-4 py-10 sm:w-[75vw] sm:border-l-1 sm:py-20 md:px-10 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">AidEye</h1>
          <p>
            <span className="text-primary">Ai</span>dEyeKit is written in
            Typescript and built to be highly configurable. You can configure
            aideye globally, per step, and even on the fly while it&apos;s
            running. All configuration options are optional.
          </p>
          <Card className="bg-secondary text-text">
            <CardHeader className="text-xl font-bold text-primary">
              Here&apos;s a tip!
            </CardHeader>
            <CardBody>
              <p>
                If you&apos;re using an integrated development environment (IDE)
                like VSCode, you&apos;ll get autocomplete and documentation for
                all the configuration options.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            AidEye Configuration
          </h2>
          <p>
            You can configure aideye globally by passing the configuration
            object to the <Code color="primary">aideye</Code> call or by using
            the <Code color="primary">setConfig</Code> method. Here&apos;s a
            table of all the configuration options.
          </p>
          <Code color="primary" className="overflow-x-auto p-4">
            <SpanCode text="// Function call" color="grey" />
            <br />
            <SpanCode text="const" color="cyan" />{" "}
            <SpanCode text="myAidEye" color="white" />{" "}
            <SpanCode text="=" color="white" />{" "}
            <SpanCode text="aideye" color="purple" />
            <SpanCode text="({" color="white" />{" "}
            <SpanCode text="/* ... */" color="grey" />{" "}
            <SpanCode text="});" color="white" />
            <br />
            <br />
            <SpanCode text="// Object method" color="grey" />
            <br />
            <SpanCode text="myAidEye" color="white" />
            <SpanCode text=".setConfig" color="purple" />
            <SpanCode text="({" color="white" />{" "}
            <SpanCode text="/* ... */" color="grey" />{" "}
            <SpanCode text="});" color="white" />
          </Code>
          <Table
            aria-label="AidEye configuration list"
            removeWrapper
            className="overflow-x-auto"
          >
            <TableHeader columns={aidEyeColumn}>
              {(column) => (
                <TableColumn
                  className="bg-primary text-background"
                  key={column.key}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={aidEyeRow}>
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
          <h2 className="text-2xl font-bold sm:text-3xl">AidEye Render Hook</h2>
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
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            AidEye Highlight Hook
          </h2>
          <p>Hooks to run before and after highlighting each step.</p>
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
                  - The target DOM element of the step.
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
                  - The current state of aidEye.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Code color="primary" className="overflow-x-auto p-4">
            <SpanCode text="onHighlightStarted" color="purple" />
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
            <SpanCode text="onHighlighted" color="purple" />
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
            <SpanCode text="onDeselected" color="purple" />
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
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            AidEye Destroy Hook
          </h2>
          <p>Hooks to run before and after aidEye is destroyed.</p>
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
                  - Currently active element.
                </li>
                <li>
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    step
                  </Code>{" "}
                  - The step object configured for the currently active.
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
                  - The current state of aidEye.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Code color="primary" className="overflow-x-auto p-4">
            <SpanCode text="onDestroyStarted" color="purple" />
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
            <SpanCode text="onDestroyed" color="purple" />
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
                  - The current state of aidEye.
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
                  hooks, you control the navigation of aidEye.
                </p>
                <p>
                  This means that the user won&apos;t be able to navigate using
                  the buttons and you will have to either call{" "}
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    myAidEye.moveNext()
                  </Code>{" "}
                  or{" "}
                  <Code
                    color="primary"
                    className="bg-background/50 text-primary"
                  >
                    myAidEye.movePrevious()
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
                  configured at aidEye level, you control the navigation for all
                  the steps. When configured at the step level, you control the
                  navigation for that particular step only.
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
          <NextLink href="/get-started" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              Get Started
            </Button>
          </NextLink>
          <NextLink href="/popover" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              Popover
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
