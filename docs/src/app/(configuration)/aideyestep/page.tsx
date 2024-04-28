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

const aidEyeStepColumn = [
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

const aidEyeStepRow = [
  {
    key: "1",
    Attribute: "element",
    Type: <Code color="primary">Element | string</Code>,
    Description: (
      <div>
        <p>
          The target element to highlight. This can be a DOM element, or a CSS
          selector.
        </p>
        <p>
          If this is a selector, the first matching element will be highlighted.
        </p>
      </div>
    ),
  },
  {
    key: "2",
    Attribute: "popover",
    Type: <Code color="primary">Popover</Code>,
    Description: "The popover configuration for this step.",
  },
];

export default function AidEyeStep() {
  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex w-full flex-col gap-10 border-primary/30 px-4 py-10 sm:w-[75vw] sm:border-l-1 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">AidEyeStep</h1>
          <p>
            AidEyeStep is the configuration object passed to the{" "}
            <Code color="primary">highlight</Code> method or the{" "}
            <Code color="primary">steps</Code> array of the{" "}
            <Code color="primary">start</Code> method.
          </p>
          <p>
            You can configure the popover and the target element for each step.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            AidEyeStep Configuration
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
            <TableHeader columns={aidEyeStepColumn}>
              {(column) => (
                <TableColumn
                  className="bg-primary text-background"
                  key={column.key}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={aidEyeStepRow}>
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
            AidEyeStep Highlight Hook
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
        <div className="flex flex-row justify-between">
          <NextLink href="/popover" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              Popover
            </Button>
          </NextLink>
          <NextLink href="/state" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              State
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
