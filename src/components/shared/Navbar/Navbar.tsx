import { Menu, Plus} from "lucide-react"
import SearchBar from "./SearchBar"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between mb-5">
        <SearchBar/>
        <div className="flex items-center gap-4">
            <div className="bg-secondary w-fit h-11 flex items-center gap-3 rounded-full px-2 border border-border-1">
                <Menu size={20}/>
                <img src="https://picsum.photos/200" alt="random_image" className="w-8 h-8 rounded-full"/>
            </div>
            <Button className="bg-accent w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 active:bg-accent/90 border border-border-1">
                <Plus size={20} className="text-white"/>
            </Button>
        </div>
    </div>
  )
}

export default Navbar