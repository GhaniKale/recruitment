'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateApplicationStatus(id: string, status: string) {
    const supabase = await createClient();

    const { error } = await supabase
        .from('applications')
        .update({ status: status })
        .eq('id', id);

    if (error) {
        console.error('Update status error:', error);
        return { message: 'Gagal mengubah status.' };
    }

    revalidatePath('/admin/candidates');
    revalidatePath(`/admin/candidates/${id}`);
}


