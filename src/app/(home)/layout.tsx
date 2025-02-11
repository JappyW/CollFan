import { NavBar } from "@/components/NavBar";
import { navBarLinks, TOAST_DURATION } from "@/constants";
import { Toaster } from "sonner";

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar navBarLinks={navBarLinks} />
      <div className="pt-8">{children}</div>
      <Toaster closeButton duration={TOAST_DURATION} />
    </>
  );
}
