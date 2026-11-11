import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

interface AuthLayoutProps {
    title: string;
    activeTab: 'login' | 'register';
    heading: string;
    subheading: string;
    leftTagline: string;
    footerNote?: ReactNode;
}

export default function AuthLayout({
    children,
    title,
    activeTab,
    heading,
    subheading,
    leftTagline,
    footerNote,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="min-h-screen bg-[#EAE6DE] text-[#1E211A] flex items-center justify-center p-3 sm:p-6 lg:p-10 font-sans selection:bg-[#1E211A] selection:text-white">
            <Head title={title} />

            {/* Centered Floating Card Container */}
            <div className="w-full max-w-[1060px] bg-[#F1EEE7] rounded-[32px] sm:rounded-[38px] shadow-[0_24px_64px_-16px_rgba(26,30,22,0.18)] border border-stone-200/80 p-3 sm:p-4 lg:p-5 my-auto transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    {/* Left Hero Card */}
                    <aside className="lg:col-span-5 bg-[#1E211A] rounded-[26px] sm:rounded-[30px] overflow-hidden flex flex-col justify-between text-white shadow-md relative min-h-[460px] lg:min-h-[620px]">
                        {/* Top Branding & Hero Text */}
                        <div className="p-6 sm:p-8 lg:p-9 relative z-10">
                            {/* Logo Pill */}
                            <div className="flex items-center gap-2.5">
                                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1E211A] font-serif italic font-bold text-sm shadow-sm select-none">
                                    p
                                </span>
                                <span className="font-semibold text-base sm:text-lg text-white tracking-tight">
                                    PantryPilot
                                </span>
                            </div>

                            {/* Editorial Headings */}
                            <div className="mt-7 sm:mt-10 lg:mt-12">
                                <h1 className="text-3xl sm:text-[36px] font-bold tracking-tight text-white leading-[1.12]">
                                    A little order.
                                </h1>
                                <p className="font-serif italic text-3xl sm:text-[36px] text-white/95 font-normal leading-[1.12] mt-1">
                                    A lot of good.
                                </p>
                                <p className="mt-3 text-[#9EA498] text-xs sm:text-sm font-normal max-w-xs">
                                    {leftTagline}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Food Photography */}
                        <div className="relative mt-auto w-full overflow-hidden select-none">
                            <picture>
                                <source srcSet="/images/auth-food.webp" type="image/webp" />
                                <img
                                    src="/images/auth-food.png"
                                    alt="Fresh organic mediterranean salad bowl in kitchen"
                                    className="w-full h-[260px] sm:h-[300px] lg:h-[350px] object-cover object-center"
                                    loading="eager"
                                />
                            </picture>
                            {/* Smooth atmospheric blend overlay on top edge */}
                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1E211A] via-[#1E211A]/60 to-transparent pointer-events-none" />
                        </div>
                    </aside>

                    {/* Right Form Panel */}
                    <main className="lg:col-span-7 flex flex-col justify-between px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
                        {/* Top Navigation Bar */}
                        <div className="flex items-center justify-between text-xs text-stone-500 font-normal">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition-colors font-medium group"
                            >
                                <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                                <span>Back to home</span>
                            </Link>
                            <span className="hidden sm:inline text-[11px] text-stone-400">
                                Thoughtful kitchens start here.
                            </span>
                        </div>

                        {/* Center Form Content */}
                        <div className="max-w-[390px] w-full mx-auto my-auto py-6 sm:py-8">
                            {/* Segmented Pill Switcher */}
                            <div className="bg-[#E5E1D7] p-1 rounded-full inline-flex max-w-[270px] w-full mb-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
                                <Link
                                    href={route('login')}
                                    className={`flex-1 text-center py-1.5 px-4 rounded-full text-xs font-medium transition-all ${
                                        activeTab === 'login'
                                            ? 'bg-white text-stone-900 shadow-sm'
                                            : 'text-stone-600 hover:text-stone-900'
                                    }`}
                                >
                                    Sign in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className={`flex-1 text-center py-1.5 px-4 rounded-full text-xs font-medium transition-all ${
                                        activeTab === 'register'
                                            ? 'bg-white text-stone-900 shadow-sm'
                                            : 'text-stone-600 hover:text-stone-900'
                                    }`}
                                >
                                    Create account
                                </Link>
                            </div>

                            {/* Titles */}
                            <div>
                                <h2 className="text-2xl sm:text-[30px] font-bold text-stone-900 tracking-tight leading-tight">
                                    {heading}
                                </h2>
                                <p className="text-xs sm:text-sm text-stone-500 mt-1.5">
                                    {subheading}
                                </p>
                            </div>

                            {/* Social Continue with Google */}
                            <a
                                href={route('auth.google')}
                                className="w-full mt-5 bg-white hover:bg-stone-50 active:bg-stone-100 border border-stone-200/90 hover:border-stone-300 rounded-full py-2.5 px-4 flex items-center justify-center gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-xs sm:text-sm font-medium text-stone-800 transition-all cursor-pointer"
                            >
                                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                    />
                                </svg>
                                <span>Continue with Google</span>
                            </a>

                            {/* Divider */}
                            <div className="relative my-5 flex items-center justify-center">
                                <div className="w-full border-t border-stone-300/70" />
                                <span className="absolute bg-[#F1EEE7] px-3 text-xs text-stone-400 font-normal">
                                    or
                                </span>
                            </div>

                            {/* Form Body */}
                            {children}

                            {footerNote && <div className="mt-3">{footerNote}</div>}
                        </div>

                        {/* Bottom Legal & Copyright Footer */}
                        <footer className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 text-[11px] text-stone-500 border-t border-stone-300/40 mt-auto">
                            <span>© 2026 PantryPilot</span>
                            <div className="flex items-center gap-4">
                                <a href="#" className="hover:text-stone-800 transition-colors">
                                    Privacy
                                </a>
                                <a href="#" className="hover:text-stone-800 transition-colors">
                                    Terms
                                </a>
                                <a href="#" className="hover:text-stone-800 transition-colors">
                                    Help
                                </a>
                            </div>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}
