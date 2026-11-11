import AuthLayout from '@/Layouts/AuthLayout';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        terms: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout
            title="Create account"
            activeTab="register"
            heading="Make room for good."
            subheading="A fresher, more organized kitchen is one step away."
            leftTagline="Your everyday kitchen, brought together."
            footerNote={
                <p className="mt-4 text-center text-[11px] text-stone-500 font-normal">
                    Free to start. No credit card needed.
                </p>
            }
        >
            <form onSubmit={submit} className="space-y-4">
                {/* Full name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-stone-800 mb-1.5"
                    >
                        Full name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        placeholder="Your full name"
                        autoComplete="name"
                        autoFocus
                        required
                        onChange={(e) => setData('name', e.target.value)}
                        className={`w-full bg-white border ${
                            errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-stone-200/90 focus:border-stone-800'
                        } rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800/10 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]`}
                    />
                    {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.name}</p>
                    )}
                </div>

                {/* Email address */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-stone-800 mb-1.5"
                    >
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="you@example.com"
                        autoComplete="username"
                        required
                        onChange={(e) => setData('email', e.target.value)}
                        className={`w-full bg-white border ${
                            errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-stone-200/90 focus:border-stone-800'
                        } rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800/10 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]`}
                    />
                    {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.email}</p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-xs font-semibold text-stone-800 mb-1.5"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            placeholder="Create a password"
                            autoComplete="new-password"
                            required
                            onChange={(e) => setData('password', e.target.value)}
                            className={`w-full bg-white border ${
                                errors.password ? 'border-rose-400 focus:border-rose-500' : 'border-stone-200/90 focus:border-stone-800'
                            } rounded-xl pl-4 pr-11 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800/10 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors p-1 cursor-pointer"
                        >
                            {showPassword ? (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <p className="mt-1.5 text-[11px] text-stone-500 font-normal">
                        Use at least 8 characters, including a number.
                    </p>
                    {errors.password && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">{errors.password}</p>
                    )}
                </div>

                {/* Terms of Service Checkbox */}
                <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={data.terms}
                            required
                            onChange={(e) => setData('terms', e.target.checked)}
                            className="mt-0.5 w-4 h-4 rounded text-[#1E211A] border-stone-300 focus:ring-0 focus:ring-offset-0 accent-[#3E4D38] cursor-pointer"
                        />
                        <span className="text-xs text-stone-600 leading-normal">
                            I agree to the{' '}
                            <a href="#" className="underline hover:text-stone-900 font-medium">
                                Terms of service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="underline hover:text-stone-900 font-medium">
                                Privacy policy
                            </a>
                            .
                        </span>
                    </label>
                    {errors.terms && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.terms}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full mt-6 bg-[#181C17] hover:bg-[#282E25] active:bg-[#121510] text-white font-medium rounded-full py-3.5 px-6 text-sm flex items-center justify-center gap-1.5 transition-all shadow-md shadow-stone-900/10 cursor-pointer disabled:opacity-60"
                >
                    <span>Create my account</span>
                    <span className="text-base leading-none">↗</span>
                </button>
            </form>
        </AuthLayout>
    );
}
