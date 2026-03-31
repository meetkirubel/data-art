"use client"

const Year = () => {
    const d = new Date()
    const year = d.getFullYear()
    return (
        <span>{year}</span>
    )
}

export default Year