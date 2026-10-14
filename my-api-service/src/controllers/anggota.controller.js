import AnggotaModel from "../model/anggota.model.js"
import { storeAnggotaSchema, updateAnggotaSchema } from "../schemas/anggota.schema.js"
import { apiResponse, apiResponseValidation } from "../utils/response.js"

class AnggotaController {
    static async index(req, res) {
        const listAnggota = await AnggotaModel.find()

        return apiResponse({
            res,
            status: 200,
            message: "List Anggota",
            data: listAnggota,
        })
    }

    static async show(req, res) {
        const anggotaId = req.params.id

        const anggota = await AnggotaModel.findById(anggotaId)

        if (!anggota) {
            return apiResponse({
                res,
                status: 404,
                message: "Anggota tidak ditemukan",
                data: null
            })
        }

        return apiResponse({
            res,
            status: 200,
            message: "Detail Anggota",
            data: anggota
        })
    }

    static async store(req, res) {
        const result = storeAnggotaSchema.safeParse(req.body)

        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }

        const { nama_anggota, jenis_paket, status_aktif } = result.data

        const anggota = await AnggotaModel.create({
            nama_anggota: nama_anggota,
            jenis_paket: jenis_paket,
            status_aktif: status_aktif
        })

        return apiResponse({
            res,
            status: 201,
            message: "Anggota berhasil dibuat",
            data: anggota
        })
    }

    static async update(req, res) {
        const result = updateAnggotaSchema.safeParse(req.body)

        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }

        const anggotaId = req.params.id

        const { nama_anggota, jenis_paket, status_aktif } = result.data

        const exists = await AnggotaModel.exists({ _id: anggotaId })

        if (!exists) {
            return apiResponse({ res, status: 404, message: "Anggota tidak ditemukan" })
        }

        const updateAnggota = await AnggotaModel.findOneAndUpdate(
            { _id: anggotaId },
            { nama_anggota, jenis_paket, status_aktif },
            { new: true }
        )

        return apiResponse({ res, status: 200, message: "Anggota berhasil diupdate", data: updateAnggota })
    }

    static async delete(req, res) {
        const anggotaId = req.params.id

        const exists = await AnggotaModel.exists({ _id: anggotaId })

        if (!exists) {
            return apiResponse({ res, status: 404, message: "Anggota tidak ditemukan" })
        }

        await AnggotaModel.findOneAndDelete({ _id: anggotaId })

        return apiResponse({ res, status: 200, message: "Anggota berhasil dihapus", data: null })
    }
}

export default AnggotaController