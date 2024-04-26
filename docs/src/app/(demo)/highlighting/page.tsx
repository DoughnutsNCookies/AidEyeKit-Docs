import DivSideBar from "@/components/DivSidebar";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";

export default function Highlighting() {
  return (
    <main className="flex flex-col sm:flex-row">
      <DivSideBar />
      <div className="flex flex-col gap-10 border-primary/30 px-4 py-10 sm:border-l-1 sm:px-10 sm:py-20 lg:w-[50vw] lg:min-w-[50vw]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold sm:text-5xl">Highlighting</h1>
        </div>
        <div className="flex flex-row justify-between">
          <NextLink href="/theme" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              startContent={<FaArrowLeft />}
              fullWidth
            >
              Theme
            </Button>
          </NextLink>
          <NextLink href="/animation" className="w-[45%]">
            <Button
              size="md"
              variant="ghost"
              color="primary"
              endContent={<FaArrowRight />}
              fullWidth
            >
              Animation
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
