// src/pages/admin/UsersPage.tsx
import UserManagement from "@/components/admin/UserManagement";

export default function AdminUsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <UserManagement />
    </div>
  );
}