import AuthLayout from '@/Layouts/AuthLayout';
import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

interface LoginProps {
    status?: string;
    canResetPassword?: boolean;
}

export default function Login({ status, canResetPassword = true }: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout
            title="Sign in"
            activeTab="login"
            heading="Welcome back."
            subheading="Sign in to pick up right where you left off."
            leftTagline="Good to have you back in the kitchen."
            footerNote={
                <p className="mt-5 text-center text-xs text-stone-600">
                    New to PantryPilot?{' '}
                    <Link
                        href={route('register')}
                        className="font-semibold text-stone-900 hover:underline"
                    >
                        Create an account
                    </Link>
                </p>
            }
        >
            {status && (
                <div className="mb-5 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200/80">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
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
                        autoFocus
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
                            placeholder="Enter your password"
                            autoComplete="current-password"
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
                    {errors.password && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.password}</p>
                    )}
                </div>

                {/* Remember Me & Forgot Password Row */}
                <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="w-4 h-4 rounded text-[#1E211A] border-stone-300 focus:ring-0 focus:ring-offset-0 accent-[#3E4D38] cursor-pointer"
                        />
                        <span className="text-stone-600 font-normal">Remember me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-stone-600 hover:text-stone-900 transition-colors font-medium hover:underline"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full mt-6 bg-[#181C17] hover:bg-[#282E25] active:bg-[#121510] text-white font-medium rounded-full py-3.5 px-6 text-sm flex items-center justify-center gap-1.5 transition-all shadow-md shadow-stone-900/10 cursor-pointer disabled:opacity-60"
                >
                    <span>Sign in</span>
                    <span className="text-base leading-none">↗</span>
                </button>
            </form>
        </AuthLayout>
    );
}
