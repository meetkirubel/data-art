import logo from "@/asset/logo.png";
import Year from "@/components/shared/year";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
    return (
        <footer className=" bg-secondary py-24">
            <div className="wrapper mx-auto  ">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Logo and description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src={logo} alt="Data Art Consulting" className="h-12 w-50 object-cover" objectFit="cover" />
                        </Link>
                        <p className=" mb-6 max-w-sm">
                            We provide support, development, and integrations to keep your systems running smoothly and your work moving forward.</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#about" className="transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#works" className="transition-colors">
                                    Recent Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#faqs" className="transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="#cta" className="transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="transition-colors">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-colors">
                                    Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className=" text-sm">
                        © <Year /> Data Art Consulting. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
