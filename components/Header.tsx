import Navbar from "./Navbar";

export default function Header() {
  return(
    <header className={"text-white font-bold flex justify-between p-4 bg-[#476e99] h-14"}>
      World Cup 2022
      <Navbar />
    </header>
  )
}