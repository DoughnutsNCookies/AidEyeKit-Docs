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

const apiListColumn = [
  {
    key: "Method",
    label: "Method",
  },
  {
    key: "Parameter",
    label: "Parameter",
  },
  {
    key: "Returns",
    label: "Returns",
  },
  {
    key: "Description",
    label: "Description",
  },
];

const apiListRow = [
  {
    key: "1",
    Method: "start",
    Parameter: <Code color="primary">number | undefined</Code>,
    Returns: <Code color="primary">void</Code>,
    Description: (
      <p>
        Starts the tour at step <Code color="primary">number</Code>.
      </p>
    ),
  },
  {
    key: "2",
    Method: "moveNext",
    Parameter: "-",
    Returns: <Code color="primary">void</Code>,
    Description: "Moves to the next step.",
  },
  {
    key: "3",
    Method: "movePrevious",
    Parameter: "-",
    Returns: <Code color="primary">void</Code>,
    Description: "Moves to the previous step.",
  },
  {
    key: "4",
    Method: "moveTo",
    Parameter: <Code color="primary">number</Code>,
    Returns: <Code color="primary">void</Code>,
    Description: (
      <p>
        Moves to step <Code color="primary">number</Code>.
      </p>
    ),
  },
  {
    key: "5",
    Method: "hasNextStep",
    Parameter: "-",
    Returns: <Code color="primary">AidEyeStep | false</Code>,
    Description: "Returns whether there is a next step.",
  },
  {
    key: "6",
    Method: "hasPreviousStep",
    Parameter: "-",
    Returns: <Code color="primary">AidEyeStep | false</Code>,
    Description: "Returns whether there is a previous step.",
  },
  {
    key: "7",
    Method: "isFirstStep",
    Parameter: "-",
    Returns: <Code color="primary">boolean</Code>,
    Description: "Returns whether the current step is the first step.",
  },
  {
    key: "8",
    Method: "getActiveIndex",
    Parameter: "-",
    Returns: <Code color="primary">number | undefined</Code>,
    Description: "Returns the active step index.",
  },
  {
    key: "9",
    Method: "getActiveStep",
    Parameter: "-",
    Returns: <Code color="primary">AidEyeStep | undefined</Code>,
    Description: "Returns the active step configuration.",
  },
  {
    key: "10",
    Method: "getPreviousStep",
    Parameter: "-",
    Returns: <Code color="primary">AidEyeStep | undefined</Code>,
    Description: "Returns the previous step configuration.",
  },
  {
    key: "11",
    Method: "getActiveElement",
    Parameter: "-",
    Returns: <Code color="primary">Element | undefined</Code>,
    Description: "Returns the active HTML element.",
  },
  {
    key: "12",
    Method: "getPreviousElement",
    Parameter: "-",
    Returns: <Code color="primary">Element | undefined</Code>,
    Description: "Returns the previous HTML element.",
  },
  {
    key: "13",
    Method: "isActive",
    Parameter: "-",
    Returns: <Code color="primary">boolean</Code>,
    Description: "Returns whether the tour or highlight is currently active.",
  },
  {
    key: "14",
    Method: "refresh",
    Parameter: "-",
    Returns: <Code color="primary">void</Code>,
    Description: "Recalculates and redraws the highlight.",
  },
  {
    key: "15",
    Method: "getConfig",
    Parameter: "-",
    Returns: <Code color="primary">Config</Code>,
    Description: "Returns the configuration object.",
  },
  {
    key: "16",
    Method: "setConfig",
    Parameter: <Code color="primary">Config | undefined</Code>,
    Returns: <Code color="primary">void</Code>,
    Description: "Sets the configuration object.",
  },
  {
    key: "17",
    Method: "setSteps",
    Parameter: <Code color="primary">AidEyeStep[]</Code>,
    Returns: <Code color="primary">void</Code>,
    Description: "Sets the steps.",
  },
  {
    key: "18",
    Method: "getState",
    Parameter: "-",
    Returns: <Code color="primary">State</Code>,
    Description: "Returns the state object.",
  },
  {
    key: "19",
    Method: "highlight",
    Parameter: <Code color="primary">AidEyeStep</Code>,
    Returns: <Code color="primary">void</Code>,
    Description: "Highlights an element.",
  },
  {
    key: "20",
    Method: "destroy",
    Parameter: "-",
    Returns: <Code color="primary">void</Code>,
    Description: "Destroys the instance.",
  },
];

export default function APIList() {
  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex flex-col gap-10 border-primary/30 px-4 py-10 sm:border-l-1 sm:px-10 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">API List</h1>
          <p>
            The list of methods provided by <Code color="primary">aideye</Code>{" "}
            after initialization.
          </p>
          <Table
            aria-label="AidEye configuration list"
            removeWrapper
            className="overflow-x-auto"
          >
            <TableHeader columns={apiListColumn}>
              {(column) => (
                <TableColumn
                  className="bg-primary text-background"
                  key={column.key}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={apiListRow}>
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
          <NextLink href="/state" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              State
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
