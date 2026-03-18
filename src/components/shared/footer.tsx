import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className=" bg-secondary py-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Logo and description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 8L24 8L16 24L8 8Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span className="font-bold text-3xl tracking-tighter">Data Art Consulting</span>
                        </Link>
                        <p className=" mb-6 max-w-sm">
                            Ship your MVP in 30 days with battle-tested code and AI-accelerated development.
                        </p>
                        <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full">
                            Schedule a Call
                        </Button>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className=" hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" hover:text-white transition-colors">
                                    Recent Work
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className=" hover:text-white transition-colors">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" hover:text-white transition-colors">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" hover:text-white transition-colors">
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" hover:text-white transition-colors">
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className=" text-sm">
                        © 2026 Data Art Consulting. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className=" hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className=" hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
