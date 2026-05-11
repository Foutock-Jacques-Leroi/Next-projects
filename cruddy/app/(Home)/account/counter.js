"use client"

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p> {count} Likes</p>
            <button className="px-4 bg-amber-200 rounded-b-md" onClick={() => setCount(count + 1)}>
                Add likes
            </button>
        </div>
    )
}