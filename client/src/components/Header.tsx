"use client"
import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
    const [language, setLanguage] = React.useState("English")

    return (
        <div className="flex flex-wrap justify-between items-center w-full p-3 gap-4 bg-white fixed top-0 left-0">
            <div className="flex gap-2 items-center">
                <h1 className="text-blue-700 text-xl md:text-2xl font-bold cursor-pointer">E-LEARNING</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-blue-800 text-sm md:text-md font-semibold px-3 py-1 rounded border shadow border-blue-800 hover:shadow-black hover:text-blue-600">
                        Explore
                        <img className="px-1 py-2 w-4 md:w-5" src="down-arrow.svg" alt="down-arrow" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Subjects - Diploma</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Smartphone Services</DropdownMenuItem>
                        <DropdownMenuItem>Fullstack Development</DropdownMenuItem>
                        <DropdownMenuItem>Frontend Development</DropdownMenuItem>
                        <DropdownMenuItem>Backend Development</DropdownMenuItem>
                        <DropdownMenuItem>Mobile App Development</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Goals</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Take a Free Course</DropdownMenuItem>
                        <DropdownMenuItem>Earn a Diploma</DropdownMenuItem>
                        <DropdownMenuItem>Find New Career</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex border border-gray-300 rounded-3xl w-full md:w-1/3 lg:w-1/4 p-1">
                <input className="w-full ml-2 mr-2" placeholder="What do you want to learn?" type="text" />
                <button className="bg-blue-600 rounded-3xl p-1" type="button">
                    <img className="w-6 md:w-7 p-1" src="search.png" alt="search" />
                </button>
            </div>
            <div className="flex gap-2 items-center">
                <img className="p-2 w-8 md:w-10 hover:bg-blue-50 cursor-pointer" src="shopping-cart.png" alt="shopping-cart" />
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center p-2 text-gray-600 hover:bg-blue-50 gap-1 cursor-pointer">
                        <img className="w-5 md:w-6" src="globe.png" alt="globe" />
                        <h1 className="hidden sm:block">{language}</h1>
                        <img className="w-3" src="down-arrow.svg" alt="down-arrow" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Languages</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                            <DropdownMenuRadioItem value="English">English</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Malayalam">Malayalam</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Hindi">Hindi</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Tamil">Tamil</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="More">More...</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <img className="w-8 md:w-10 p-2 hover:bg-blue-50 cursor-pointer" src="notification.png" alt="notification" />
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center hover:bg-blue-50 px-2 gap-1 cursor-pointer">
                        <h1 className="w-8 md:w-10 py-2 text-center font-semibold bg-blue-900 text-white rounded-3xl">A</h1>
                        <img className="w-3" src="down-arrow.svg" alt="down-arrow" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>User Name</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>My Courses</DropdownMenuItem>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>My Purchases</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Updates</DropdownMenuItem>
                        <DropdownMenuItem>Accomplishments</DropdownMenuItem>
                        <DropdownMenuItem>Help Center</DropdownMenuItem>
                        <DropdownMenuItem>Log Out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Header
