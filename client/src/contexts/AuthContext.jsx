import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        isAuthenticated: false,
        role: null,
        details: null
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser({
                isAuthenticated: true,
                role: JSON.parse(storedUser).role || 'customer', // default role if undefined
                details: JSON.parse(storedUser)
            });
        }
        setLoading(false);
    }, []);

    const login = async (email, password, role = 'customer') => {
        setLoading(true);
        try {
            // Simulate API call
            const mockUser = {
                id: '1',
                name: 'John Doe',
                email: email,
                role: role,
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            };
            setUser({
                isAuthenticated: true,
                role: role,
                details: mockUser
            });
            localStorage.setItem('user', JSON.stringify(mockUser));
        } finally {
            setLoading(false);
        }
    };

    const signup = async (name, email, password, role = 'customer') => {
        setLoading(true);
        try {
            // Simulate API call
            const mockUser = {
                id: '1',
                name: name,
                email: email,
                role: role,
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            };
            setUser({
                isAuthenticated: true,
                role: role,
                details: mockUser
            });
            localStorage.setItem('user', JSON.stringify(mockUser));
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser({
            isAuthenticated: false,
            role: null,
            details: null
        });
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
