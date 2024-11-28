import Navbar from "../ui/reviews/Navbar";

export const experimental_ppr = true;

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {children}
      </div>
    </>
  );
}