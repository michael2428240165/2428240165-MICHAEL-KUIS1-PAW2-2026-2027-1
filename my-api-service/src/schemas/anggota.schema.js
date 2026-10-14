import { z } from "zod";

export const storeAnggotaSchema = z.object({
    nama_anggota : z.string().trim().min(3, "Nama Anggota minimal 3 karakter"),
    jenis_paket : z.string().trim().min(3, "Jenis Paket minimal 3 karakter"),
    status_aktif : z.boolean("Status Aktif harus true atau false")
})

export const updateAnggotaSchema = z.object({
    nama_anggota : z.string().trim().min(3, "Nama Anggota minimal 3 karakter"),
    jenis_paket : z.string().trim().min(3, "Jenis Paket minimal 3 karakter"),
    status_aktif : z.boolean("Status Aktif harus true atau false")
})