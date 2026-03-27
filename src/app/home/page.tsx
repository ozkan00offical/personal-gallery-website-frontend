import Announcements from "@/components/ui/Announcemets";
import Events from "@/components/ui/Events";
import Hero from "@/components/ui/Hero";
import SelectedWorks from "@/components/ui/SelectedWorks";
import Selections from "@/components/ui/Selections";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Hero />
      <SelectedWorks />
      <Announcements />
      <Events />
      <Selections />
    </div>
  )
}
