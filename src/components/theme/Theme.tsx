import React from 'react'

const Theme: React.FC = () => {
    const [theme, setTheme] = React.useState<string>('light')

    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
    return (
        <div>Theme</div>
    )
}

export default Theme