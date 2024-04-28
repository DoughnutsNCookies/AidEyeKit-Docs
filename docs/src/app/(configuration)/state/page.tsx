"use client";
import DivSideBar from "@/components/DivSidebar";
import {
  Button,
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

const stateColumn = [
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

const stateRow = [
  {
    key: "1",
    Attribute: "isInitialized",
    Type: <Code color="primary">boolean</Code>,
    Description: "Whether aidEye is currently active or not.",
  },
  {
    key: "2",
    Attribute: "activeIndex",
    Type: <Code color="primary">number</Code>,
    Description:
      "Index of the currently active step if using as a product tour and have configured the steps array.",
  },
  {
    key: "3",
    Attribute: "activeElement",
    Type: <Code color="primary">Element</Code>,
    Description: "DOM element of the currently active step.",
  },
  {
    key: "4",
    Attribute: "activeStep",
    Type: <Code color="primary">AidEyeStep</Code>,
    Description: "Step object of the currently active step.",
  },
  {
    key: "5",
    Attribute: "previousElement",
    Type: <Code color="primary">Element</Code>,
    Description: "DOM element that was previously active.",
  },
  {
    key: "6",
    Attribute: "previousStep",
    Type: <Code color="primary">AidEyeStep</Code>,
    Description: "Step object of the previously active step.",
  },
  {
    key: "7",
    Attribute: "popover",
    Type: <Code color="primary">PopoverDOM</Code>,
    Description:
      "DOM elements for the popover: container, title, description, buttons, and etc.",
  },
];

export default function State() {
  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex w-full flex-col gap-10 border-primary/30 px-4 py-10 sm:w-[75vw] sm:border-l-1 sm:py-20 md:px-10 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">State</h1>
          <p>
            You can access the current state of aideye by calling the{" "}
            <Code color="primary">getState</Code> method. It&apos;s also passed
            to the hooks and callbacks.
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
            <TableHeader columns={stateColumn}>
              {(column) => (
                <TableColumn
                  className="bg-primary text-background"
                  key={column.key}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={stateRow}>
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
          <NextLink href="/aideyestep" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              AidEyeStep
            </Button>
          </NextLink>
          <NextLink href="/api-list" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              API List
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
