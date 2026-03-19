import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/asset/logo.png"
export function Footer() {
    return (
        <footer className=" bg-secondary py-16">
            <div className="wrapper mx-auto  ">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Logo and description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src={logo} alt="Data Art Consulting" className="h-12 w-50 object-cover" objectFit="cover" />
                        </Link>
                        <p className=" mb-6 max-w-sm">
                            We provide support, development, and integrations to keep your systems running smoothly and your work moving forward.                        </p>
                        <Link href="https://form.jotform.com/242335134954456" target="_blank">
                            <Button >
                                Schedule a Call
                            </Button>
                        </Link>
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
