<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    /**
     * Redirect the user to Google OAuth provider.
     */
    public function redirect(): RedirectResponse
    {
        $clientId = config('services.google.client_id');
        $clientSecret = config('services.google.client_secret');

        if (empty($clientId) || empty($clientSecret)) {
            return redirect()->route('login')->with(
                'status',
                'Google OAuth is almost ready! Please set your GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in the .env file.'
            );
        }

        return Socialite::driver('google')->redirect();
    }

    /**
     * Handle the incoming callback from Google.
     */
    public function callback(): RedirectResponse
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            // Find existing user by google_id or by email
            $user = User::where('google_id', $googleUser->getId())
                ->orWhere('email', $googleUser->getEmail())
                ->first();

            if ($user) {
                // Link Google ID and update avatar if not yet linked
                $user->update([
                    'google_id' => $user->google_id ?: $googleUser->getId(),
                    'avatar' => $user->avatar ?: $googleUser->getAvatar(),
                    'email_verified_at' => $user->email_verified_at ?: now(),
                ]);
            } else {
                // Register a new user from Google profile
                $user = User::create([
                    'name' => $googleUser->getName() ?: 'Pantry User',
                    'email' => $googleUser->getEmail(),
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                    'email_verified_at' => now(),
                    'password' => null,
                ]);
            }

            Auth::login($user, remember: true);

            return redirect()->intended(route('dashboard', absolute: false));
        } catch (Exception $e) {
            return redirect()->route('login')->with(
                'status',
                'Failed to authenticate with Google: ' . $e->getMessage()
            );
        }
    }
}
