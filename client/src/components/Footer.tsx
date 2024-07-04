const Footer = () => {
    return (
        <>
            <div className="w-full border-t border-b mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 py-10">
                    <div className="p-5">
                        <ul>
                            <h1 className="text-xl font-semibold p-1">E-Learning</h1>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">About</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">What We Offer</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Careers</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">E-Learning Plus</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Diploma Courses</li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <h1 className="text-xl font-semibold p-1">Community</h1>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Learners</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Partners</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Beta Testers</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Teaching Center</li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <h1 className="text-xl font-semibold p-1">More</h1>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Investors</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Terms</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Privacy</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Help</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Contact</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Articles</li>
                            <li className="px-2 text-sm hover:underline hover:cursor-pointer">Affiliates</li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <h1 className="text-xl font-semibold p-1">Mobile App</h1>
                            <li className="p-1">
                                <img className="w-full sm:w-3/6 hover:cursor-pointer" src="appstore.png" alt="App Store" />
                            </li>
                            <li className="p-1">
                                <img className="w-full sm:w-3/6 hover:cursor-pointer" src="playstore.png" alt="Play Store" />
                            </li>
                            <li className="p-1">
                                <img className="w-full sm:w-2/6 border-2 shadow justify-center" src="smartdepotcertified.png" alt="Smart Depot Certified" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full px-1">
                <div className="flex flex-col sm:flex-row gap-5 px-5 py-5 justify-between items-center">
                    <p className="text-xs text-center sm:text-left">
                        &copy; 2024 Wanderlust. Powered by Smart-Depot. All rights reserved.
                    </p>
                    <div className="flex gap-3">
                        <img className="w-8 sm:w-10 px-1 hover:cursor-pointer" src="fb.png" alt="Facebook" />
                        <img className="w-8 sm:w-10 px-1 hover:cursor-pointer" src="linkedin.png" alt="LinkedIn" />
                        <img className="w-8 sm:w-10 px-1 hover:cursor-pointer" src="twitter.png" alt="Twitter" />
                        <img className="w-8 sm:w-10 px-1 hover:cursor-pointer" src="yt.png" alt="YouTube" />
                        <img className="w-8 sm:w-10 px-1 hover:cursor-pointer" src="ig.png" alt="Instagram" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
