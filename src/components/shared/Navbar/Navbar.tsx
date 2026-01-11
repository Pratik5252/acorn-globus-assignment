import { Menu, Plus} from "lucide-react"
import SearchBar from "./SearchBar"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between mb-4">
        <SearchBar/>
        <div className="flex items-center gap-4">
            <div className="bg-secondary w-fit h-9 flex items-center gap-3 rounded-full px-2 border border-border-1">
                <Menu size={16}/>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="random_image" className="w-6 h-6 rounded-full"/>
            </div>
            <Button className="bg-accent w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 active:bg-accent/90 border border-border-1">
                <Plus size={16} className="text-white"/>
            </Button>
        </div>
    </div>
  )
}

export default Navbar