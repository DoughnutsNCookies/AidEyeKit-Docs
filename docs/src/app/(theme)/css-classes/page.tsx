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

const classColumn = [
  {
    key: "Class",
    label: "Class",
  },
  {
    key: "Description",
    label: "Description",
  },
];

const classRow = [
  {
    key: "1",
    Class: <Code color="primary">aideye-popover</Code>,
    Description: "Class assigned to popover wrapper.",
  },
  {
    key: "2",
    Class: <Code color="primary">aideye-popover-arrow</Code>,
    Description: "Arrow pointing towards the highlighted element.",
  },
  {
    key: "3",
    Class: <Code color="primary">aideye-popover-title</Code>,
    Description: "Title of the popover.",
  },
  {
    key: "4",
    Class: <Code color="primary">aideye-popover-description</Code>,
    Description: "Description of the popover.",
  },
  {
    key: "5",
    Class: <Code color="primary">aideye-popover-close-btn</Code>,
    Description: "Close button displayed on the top right corner.",
  },
  {
    key: "6",
    Class: <Code color="primary">aideye-popover-footer</Code>,
    Description: "Footer of the popover displaying progress.",
  },
  {
    key: "7",
    Class: <Code color="primary">aideye-popover-progress-text</Code>,
    Description: "Progress text of the popover.",
  },
  {
    key: "8",
    Class: <Code color="primary">aideye-popover-prev-btn</Code>,
    Description: "Previous navigation button of the popover.",
  },
  {
    key: "9",
    Class: <Code color="primary">aideye-popover-next-btn</Code>,
    Description: "Next navigation button of the popover.",
  },
  {
    key: "10",
    Class: <Code color="primary">aideye-active</Code>,
    Description: "Applied to the body when aideye is active.",
  },
  {
    key: "11",
    Class: <Code color="primary">aideye-fade</Code>,
    Description: "Applied to the body when aideye is animated.",
  },
  {
    key: "12",
    Class: <Code color="primary">aideye-simple</Code>,
    Description: "Applied to the body when aideye is not animated.",
  },
  {
    key: "13",
    Class: <Code color="primary">aideye-overlay</Code>,
    Description: "The lightbox displayed over the page.",
  },
  {
    key: "14",
    Class: <Code color="primary">aideye-active-element</Code>,
    Description: "Whenever an element is highlighted.",
  },
];

export default function CSSClasses() {
  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex w-full flex-col gap-10 border-primary/30 px-4 py-10 sm:w-[75vw] sm:border-l-1 sm:py-20 xl:w-[50vw] xl:min-w-[50vw]">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold sm:text-5xl">CSS Classes</h1>
          <p>
            Here is the list of classes applied to the popover which you can use
            in conjunction with <Code color="primary">popoverClass</Code> option
            to apply custom styles on the popover.
          </p>
          <Card className="bg-secondary text-text">
            <CardHeader className="text-xl font-bold text-primary">
              Here&apos;s a tip!
            </CardHeader>
            <CardBody>
              <p>
                It&apos;s best to create a new CSS file with these classes and
                then import it into your project when you want to use them.
              </p>
            </CardBody>
          </Card>
          <Table
            aria-label="AidEye configuration list"
            removeWrapper
            className="overflow-x-auto"
          >
            <TableHeader columns={classColumn}>
              {(column) => (
                <TableColumn
                  className="bg-primary text-background"
                  key={column.key}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={classRow}>
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
          <NextLink href="/applying-css" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              Applying CSS
            </Button>
          </NextLink>
          <NextLink href="/overlay-color" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              Overlay Color
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
