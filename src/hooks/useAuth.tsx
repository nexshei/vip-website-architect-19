
import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  id: string;
  email: string;
  full_name?: string;
}

interface Session {
  user: User;
  access_token: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage
    const storedSession = localStorage.getItem('auth_session');
    if (storedSession) {
      try {
        const parsedSession = JSON.parse(storedSession);
        setSession(parsedSession);
        setUser(parsedSession.user);
      } catch (error) {
        console.error('Error parsing stored session:', error);
        localStorage.removeItem('auth_session');
      }
    }
    setLoading(false);
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      // Mock sign up - in real app this would call an API
      const newUser: User = {
        id: Date.now().toString(),
        email,
        full_name: fullName
      };
      
      const newSession: Session = {
        user: newUser,
        access_token: 'mock_token_' + Date.now()
      };

      // Store users in localStorage for demo
      const users = JSON.parse(localStorage.getItem('auth_users') || '[]');
      users.push({ email, password, ...newUser });
      localStorage.setItem('auth_users', JSON.stringify(users));
      
      setUser(newUser);
      setSession(newSession);
      localStorage.setItem('auth_session', JSON.stringify(newSession));
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Mock sign in - check against stored users
      const users = JSON.parse(localStorage.getItem('auth_users') || '[]');
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (!foundUser) {
        return { error: { message: 'Invalid email or password' } };
      }

      const user: User = {
        id: foundUser.id,
        email: foundUser.email,
        full_name: foundUser.full_name
      };
      
      const newSession: Session = {
        user,
        access_token: 'mock_token_' + Date.now()
      };

      setUser(user);
      setSession(newSession);
      localStorage.setItem('auth_session', JSON.stringify(newSession));
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signOut = async () => {
    setUser(null);
    setSession(null);
    localStorage.removeItem('auth_session');
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
