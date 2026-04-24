import { z } from 'zod';

export const MAX_FILE_SIZE = 5000000; // 5MB
export const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

export const applicationSchema = z.object({
    job_id: z.string().uuid(),
    full_name: z.string().min(3, "Nama lengkap minimal 3 karakter"),
    nik: z.string().length(16, "NIK harus 16 digit angka").regex(/^\d+$/, "NIK harus berupa angka"),
    email: z.string().email("Email tidak valid"),
    phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
    address: z.string().min(10, "Alamat minimal 10 karakter"),
    cv_file: z
        .any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
        .refine(
            (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
            "Only .pdf, .doc, .docx formats are supported."
        ),
    // honeypot or captcha token if needed
});

export const jobSchema = z.object({
    title: z.string().min(3, "Judul minimal 3 karakter"),
    country: z.string().min(2, "Negara harus dipilih"),
    city: z.string().min(2, "Kota minimal 2 karakter"),
    category: z.string().min(2, "Kategori harus dipilih"),
    description: z.string().min(10, "Deskripsi minimal 10 karakter"),
    requirements: z.string().optional(),
    contract_type: z.string().optional(),
    quota: z.coerce.number().min(0).optional(),
    salary: z.string().optional(),
    benefits: z.array(z.string()).optional(), // or JSONB in DB?
    // Adapting benefits from form checkboxes to array or object
    is_active: z.boolean().default(true),
});
