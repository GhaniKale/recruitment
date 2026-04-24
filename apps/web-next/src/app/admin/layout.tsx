import AdminLayoutClient from '@/components/AdminLayout';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminLayoutClient breadcrumbs={null}>
            {children}
        </AdminLayoutClient>
    );
}
