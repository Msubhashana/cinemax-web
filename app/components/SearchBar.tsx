"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: {onSearch: (terem:string) => void }) {
    const [term, setTerm] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTerm(value);
        onSearch(value); //Send the text back to the parent
    };

    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search movies..."
                value={term}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}