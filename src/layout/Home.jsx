import React from 'react';
import { Button } from 'antd';

export default function Home() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center py-12">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Our Website</h1>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Join our community today!</h2>
                <p className="text-gray-600 mb-6">Sign up now and start exploring all the features we offer!</p>
                <a href="/login">
                    <Button type="primary" className="w-full py-2">Join Now</Button>
                </a>
            </div>

            <footer className="absolute bottom-0 w-full bg-gray-800 text-white text-center pt-3">
                <div className="flex justify-center items-center">
                    <p className="text-sm">&copy; 2024 All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
