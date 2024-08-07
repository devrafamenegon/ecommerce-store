
import { Search } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Input } from "@/components/ui/input"
import Button from "./button"

export function SearchBar() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }

  const onClick = () => {
    inputValue ? router.push(`/products?name=${inputValue}`) : router.push(`/`); 
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search" value={inputValue} onChange={onChange} onKeyDown={(e) => { if (e.key === "Enter") onClick() }}
 className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"/>
      <Button onClick={onClick} className="flex items-center rounded-full bg-black px-4 py-2">
        <Search size={20} />
      </Button>
    </div>
  )
}